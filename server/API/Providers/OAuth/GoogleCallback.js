import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

export const GoogleCallback = (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: process.env.SucessLoginURL,
    failureRedirect: process.env.FailureLoginURL,
    failureMessage: "Failed to login with Google",
  })(req, res, next);
}
