import express from 'express';
import { notes, authNotes } from '../controllers/notes.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

// Notes endpoint
router.route("/").post(authMiddleware, notes);

// Notes endpoint - to get notes of logged in user
router.route("/user").get(authMiddleware, authNotes);

export default router;