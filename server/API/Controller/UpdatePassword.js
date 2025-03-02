import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";

export const UpdatePassword = async (req, res) => {
  const {
    password,
    Token,
    Email
  } = req.body;

  if (!password || !Token || !Email) {
    return res.status(400).send("Please try again");
  }

  try {

    const user = await UserModel.findOne({ email: Email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValid = await bcrypt.compare(Token, user.resetToken);

    if (!isValid || user.resetTokenExpires < Date.now()) {
      res.status(404).json({ message: 'Invalid or expired token' });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await UserModel.findOneAndUpdate(
      { email: Email },
      { password: hashedPassword, resetToken: null, resetTokenExpires: null },
      { new: true }
    )

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Internal server error' });
  }
}
