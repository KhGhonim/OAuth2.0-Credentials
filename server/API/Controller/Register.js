import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).send("Please provide email and password");
  }

  // Check if user already exists
  const user = await UserModel.findOne({ email });

  if (!user) {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      name: fullName,
    });

    return res.status(200).json({ message: "User registered successfully" });
  } else {
    if (!user.password) {
      return res
        .status(400)
        .json({
          message: "Please use Google authentication to setup your account",
        });
    }

    return res.status(400).json({ message: "User already exists" });
  }
};

