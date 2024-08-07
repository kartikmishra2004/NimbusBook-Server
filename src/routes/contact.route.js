import express from "express";
import contact from "../controllers/contact.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { contactSchema } from "../validators/auth.validator.js";

const router = express.Router();

// contact route
router.route("/").post(validate(contactSchema), contact);

export default router;