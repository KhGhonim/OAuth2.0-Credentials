import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import MongoDB from "./Database/MongoDB.js";
import authRouter from "./API/Routes/authRouter.js";
import "./API/Providers/OAuth/PassportSetup.js";
import passport from "passport";
import ExpressSession from "express-session";
import cookieParser from "cookie-parser"; 
dotenv.config();
const port = 3000;
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_DB_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],

  })
);
app.use(express.json());
app.use(
  ExpressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000 
    },
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
//Main Route
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

// Routers
app.use("/api", authRouter);


const startServer = async () => {
  try {
    await MongoDB();
    app.listen(port, () => {
      console.log(`listening on port ${port}, http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
