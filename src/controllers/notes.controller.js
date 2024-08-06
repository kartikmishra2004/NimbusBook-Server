import Note from '../models/note.model.js';

// Notes logic - to create new notes
export const createnotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user._id;
        const notesData = await Note.create({ title, content, author });
        res.status(200).json({ message: "Notes Created successfully!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to create notes!!" });
    }
}

// Notes logic - to get notes of logged in user
export const getnotes = async (req, res) => {
    try {
        const author = req.user._id;
        const findNotes = await Note.find({ author: author });
        res.status(200).json(findNotes);
    } catch (error) {
        res.status(400).json({ message: "Failed to get notes!!" });
    }
}

// Notes logic - to update notes of logged in user
export const updatenotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        // Create new note object
        const newNote = {}
        if (title) { newNote.title = title }
        if (content) { newNote.content = content }

        // find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) {
            res.status(404).json({ message: "Failed to find notes!!" });
        }
        if (note.author.toString() != req.user._id) {
            res.status(401).json({ message: "Unauthorized!!" });
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.status(200).json({ note, message: "Notes updated successfully!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to update notes!!" });
    }
}

// Notes logic - to delete notes of logged in user
export const deletenotes = async (req, res) => {
    try {
        // Find the note to be deleted and delete it 
        let note = await Note.findById(req.params.id);
        if (!note) {
            res.status(404).json({ message: "Failed to find notes!!" });
        }
        if (note.author.toString() != req.user._id) {
            res.status(401).json({ message: "Unauthorized!!" });
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Notes deleted successfully!!"});
    } catch (error) {
        res.status(400).json({ message: "Failed to delete notes!!" });
    }
}