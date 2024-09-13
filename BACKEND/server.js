import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectDb from "./lib/db.js"
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT =   3000;
connectDb();  // Call to connect to MongoDB

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("server is running on this " + PORT);
});
