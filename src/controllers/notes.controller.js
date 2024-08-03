import Note from '../models/note.model.js';

// Notes logic
export const notes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user._id;
        const notesData = await Note.create({ title, content, author });
        res.status(200).json({message: "Notes Created successfully!!"});
    } catch (error) {
        res.status(400).json({ message: "Failed to create notes!!" });
    }
}

// Auth notes logic - to get notes of logged in user
export const authNotes = async (req, res) => {
    try {
        const author = req.user._id;
        const findNotes = await Note.findOne({ author: author });
        res.status(200).json(findNotes);
    } catch (error) {
        res.status(400).json({ message: "Failed to get notes!!" });
    }
}