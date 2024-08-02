import express from "express";
import { register, login } from '../controllers/auth.controller.js'
import { signupSchema, loginSchema } from '../validators/auth.validator.js'

const router = express.Router();

// Register route
router.route("/register").post(register);

//  Login route
router.route("/login").post(login);

export default router;