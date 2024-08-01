import mongoose from "mongoose";

const userSchama = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required!!"],
        minlength: [3, "Name must be atleast 3 characters long!!"],
        maxlength: [30, "Name must be less than 30 characters!!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!!"],
        lowercase: true,
        minlength: [4, "Please enter a valid email address!!"],
        maxlength: [30, "Please enter a valid email address!!"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address!!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!!"],
        minlength: [6, "Password must be atleast 3 characters long!!"],
        maxlength: [50, "Password must be less than 50 characters!!"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!!'],
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchama);

export default User;