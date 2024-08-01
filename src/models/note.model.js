import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Notes title",
    },
    content: {
        type: String,
        default: "Write your notes here!!",
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;