import express from "express";
import { LoginWithGoogle } from "../Providers/OAuth/LoginWithGoogle.js";
import { GoogleCallback } from "../Providers/OAuth/GoogleCallback.js";
import { FetchUser } from "../Controller/FetchUser.js";
import { Login } from "../Controller/Login.js";
import { Register } from "../Controller/Register.js";
import { logout } from "../Controller/logout.js";
import { SetPW } from "../Controller/SetPassword.js";
import { SendMail } from "../Providers/Mailer/SendMail.js";
import { UpdatePassword } from "../Controller/UpdatePassword.js";


const router = express.Router()


router.get("/auth/google/login", LoginWithGoogle)
router.get("/auth/google/callback", GoogleCallback)
router.get("/auth/user", FetchUser)
router.post("/auth/register", Register)
router.post("/auth/login", Login)
router.post("/auth/logout", logout)
router.post("/auth/set-password", SetPW)
router.post("/auth/reset-password", SendMail)
router.post("/auth/update-password", UpdatePassword)


export default router