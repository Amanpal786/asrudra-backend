import express from "express";


import { loginUser, sendOtp, resetPassword } from "../controller/user.Controller.js";

const router = express.Router();

router.post("/user", loginUser);
router.post("/user/send-otp", sendOtp);
router.post("/user/reset-password", resetPassword);

export default router;
