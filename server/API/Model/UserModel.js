import mongoose from "mongoose";
const { Schema, models } = mongoose;

// User Schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
      unique: true
    },
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

const UserModel = models.User || mongoose.model("User", userSchema);

export default UserModel;