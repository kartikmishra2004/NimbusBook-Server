import express from 'express';
import { createnotes, getnotes, updatenotes, deletenotes } from '../controllers/notes.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

// Notes endpoint - to create new notes for logged in user
router.route("/create").post(authMiddleware, createnotes);

// Notes endpoint - to read notes of logged in user
router.route("/get").get(authMiddleware, getnotes);

// Notes endpoint - to update the notes of loggedin user
router.route("/update/:id").put(authMiddleware, updatenotes);

// Notes endpoint - to delete the notes of loggedin user
router.route("/delete/:id").delete(authMiddleware, deletenotes);

export default router;