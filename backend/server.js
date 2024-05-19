const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/products", productRoutes);

// Root route
app.get("/", (req, res) => {
    res.send(
        'Welcome to the API, if you have any questions and or concerns please use the contact page located at <a href="https://raydaasian.mysellix.io/contact">My Contact Page</a> located at my offical sellix store',
    );
});

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
