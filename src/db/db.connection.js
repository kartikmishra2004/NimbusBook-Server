import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        mongoose.connect(DB_URI);
        console.log("MongoDB connect successfully!!");
    } catch (error) {
        console.error("Failed to connect MongoDb!!");
        process.exit(0);
    }
}

export default connectDB;