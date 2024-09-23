import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectDb from "./lib/db.js"
import cookieParser from 'cookie-parser';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import couponRoutes from './routes/coupon.route.js';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT =   3000;
connectDb();  // Call to connect to MongoDB

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);



app.listen(PORT, () => {
    console.log("server is running on this " + PORT);
});
