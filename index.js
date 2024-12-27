const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Import routes
const userRouter = require("./routes/user");
const courseRouter = require("./routes/courses");
const adminRouter = require("./routes/admin");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

// Database connection and server start
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

main();
