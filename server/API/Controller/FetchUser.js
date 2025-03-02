import UserModel from "../Model/UserModel.js";

export const FetchUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "User not authenticated" });
  }

  const User = await UserModel.findOne({ googleId: req.user.googleId });

  if (!User) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(User);
}; 
