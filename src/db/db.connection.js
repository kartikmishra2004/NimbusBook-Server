import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connect successfully!!");
    } catch (error) {
        console.error("Failed to connect MongoDb!!");
        process.exit(1);
    }
}

export default connectDB;