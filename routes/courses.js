const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");

// Fetch All Available Courses
courseRouter.get("/courses", async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.json({
            message: "All available courses",
            courses,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching courses",
            error: error.message,
        });
    }
});

module.exports = { courseRouter };
