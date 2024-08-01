import express from 'express';
import 'dotenv/config';
import connectDB from './db/db.connection.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is listning on port ${PORT}`);
        });
    });