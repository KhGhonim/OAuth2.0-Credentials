import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import UserModel from "../../Model/UserModel.js";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.callbackURL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const User = {
        email: profile.emails[0].value,
        name: profile.displayName,
        profilePicture: profile.photos[0].value,
        googleId: profile.id,
      };
      try {
        let FindOrCreateUser = await UserModel.findOne({ email: User.email })

        if (!FindOrCreateUser) {
          FindOrCreateUser = await UserModel.create({
            email: User.email,
            name: User.name,
            profilePicture: User.profilePicture,
            googleId: User.googleId,
          });
        }

        return done(null, FindOrCreateUser);
      } catch (error) {
        console.log(error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id)
    done(null, user);
  } catch (error) {
    console.error("Deserialize error:", error);
    done(error, null);
  }
});
