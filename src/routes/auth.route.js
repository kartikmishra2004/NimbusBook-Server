import express from "express";
import { register, login } from '../controllers/auth.controller.js'

const router = express.Router();

// Register route
router.route("/register").post(register);

//  Login route
router.route("/login").post(login);

export default router;