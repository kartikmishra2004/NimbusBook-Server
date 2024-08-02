import express from "express";
import { register, login } from '../controllers/auth.controller.js';
import validate from "../middlewares/validate.middleware.js";
import { signupSchema, loginSchema } from '../validators/auth.validator.js';

const router = express.Router();

// Register route
router.route("/register").post(validate(signupSchema), register);

//  Login route
router.route("/login").post(validate(loginSchema), login);

export default router;