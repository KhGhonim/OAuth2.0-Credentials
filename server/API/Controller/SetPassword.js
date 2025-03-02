import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";

export const SetPW = async (req, res) => {
  const { password, id } = req.body;

  if (!password || !id) {
    return res.status(400).send("Please provide password and id");
  }

  // Hash password and update user's password in database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  const user = await UserModel.findOneAndUpdate(
    { googleId: id },
    { $set: { password: hashedPassword } },
    { new: true }
  )

  return res.status(200).json({ message: "Password set successfully", user });
}
