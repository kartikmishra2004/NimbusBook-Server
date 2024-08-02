import express from 'express';
import 'dotenv/config';
import connectDB from './db/db.connection.js';
import authRoute from './routes/auth.route.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is listning on port ${PORT}`);
        });
    });