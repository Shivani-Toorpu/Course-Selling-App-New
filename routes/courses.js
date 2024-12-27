const { Router } = require("express");
const courseRouter = Router();

// Import models
const { courseModel } = require("../db");

// Course routes
courseRouter.get("/courses", (req, res) => {
    res.json({
        message: "All available courses",
    });
});

module.exports = courseRouter;
