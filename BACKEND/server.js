import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectDb from "./lib/db.js"
import cookieParser from 'cookie-parser';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import couponRoutes from './routes/coupon.route.js';
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
import path from "path";




const app = express();

dotenv.config();
app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request

app.use(cookieParser());

const PORT =   3000;
const __dirname = path.resolve();

connectDb();  // Call to connect to MongoDB

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/FRONTEND/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "FRONTEND", "dist", "index.html"));
	});
}






app.listen(PORT, () => {
    console.log("server is running on this " + PORT);
});
