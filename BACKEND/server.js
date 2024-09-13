import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectDb from "./lib/db.js"

dotenv.config();

const app = express();
const PORT =   3000;
connectDb();  // Call to connect to MongoDB

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("server is running on this " + PORT);
});
