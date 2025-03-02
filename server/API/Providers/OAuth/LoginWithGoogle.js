import passport from "passport";

export const LoginWithGoogle = (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
}
