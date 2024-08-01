import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
})

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app is listning on port ${PORT}`);
});