import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function authMiddleware(req, res, next) {
  const token = req.cookies.PassportTest;
  if (!token) {
    return res.status(401).json({
      message: "Access denied, no token provided",
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Invalid Token",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}