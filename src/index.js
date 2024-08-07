import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './db/db.connection.js';
import authRoute from './routes/auth.route.js';
import notesRout from './routes/notes.route.js';
import contactRout from './routes/contact.route.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "https://nimbusbook.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsOptions));

// Middlewares
app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

// API for Notes
app.use("/api/v1/notes", notesRout);

// API for contact details
app.use("/api/v1/contact", contactRout);

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is listning on port ${PORT}`);
        });
    });