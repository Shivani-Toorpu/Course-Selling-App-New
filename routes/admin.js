const { Router } = require("express");
const adminRouter = Router();

// Import models
const { adminModel } = require("../db");

// Admin routes
adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "Admin signed up",
    });
});

adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "Admin signed in",
    });
});

adminRouter.post("/create-course", (req, res) => {
    res.json({
        message: "Admin created a course",
    });
});

adminRouter.post("/delete-course", (req, res) => {
    res.json({
        message: "Admin deleted a course",
    });
});

adminRouter.post("/add-content", (req, res) => {
    res.json({
        message: "Admin added content to a course",
    });
});

module.exports = adminRouter;
