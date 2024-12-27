const { Router } = require("express");
const userRouter = Router();

// Import models
const { userModel } = require("../db");

// User routes
userRouter.post("/signup", (req, res) => {
    res.json({
        message: "User signed up",
    });
});

userRouter.post("/signin", (req, res) => {
    res.json({
        message: "User signed in",
    });
});

userRouter.post("/purchase", (req, res) => {
    res.json({
        message: "User purchased a course",
    });
});

userRouter.get("/purchased-courses", (req, res) => {
    res.json({
        message: "All purchased courses",
    });
});

module.exports = userRouter;
