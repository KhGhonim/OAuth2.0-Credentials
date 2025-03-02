import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide email and password");
  }

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // If user exists but has no password, force them to set one
    if (!user.password) {
      return res.status(400).json({
        message: "Please use Google authentication to setup your account",
      });
    }

    // Compare input password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong email or password" });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("PassportTest", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).json({ message: "User logged in successfully", user });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};
