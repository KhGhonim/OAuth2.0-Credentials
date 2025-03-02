import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import { randomBytes } from 'crypto';
import dotenv from "dotenv";
dotenv.config();

export const requestPasswordReset = async (email, res, req, next) => {
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a secure token
    const token = randomBytes(32).toString('hex');
    const hashedToken = await bcrypt.hash(token, 10);
    const expiration = Date.now() + 3600000; // Token expires in 1 hour

    await UserModel.findOneAndUpdate(
      { email },
      { resetToken: hashedToken, resetTokenExpires: expiration },
      { new: true }
    )

    const resetLink = `${process.env.resetLinkURL}?token=${token}&email=${email}`;
    return resetLink;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }

}
