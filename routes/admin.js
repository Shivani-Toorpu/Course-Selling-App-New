const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

// Admin Signup
adminRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        await adminModel.create({
            email,
            password, // TODO: Hash the password for better security
            firstName,
            lastName,
        });

        res.json({
            message: "Admin signed up",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error during signup",
            error: error.message,
        });
    }
});

// Admin Signin
adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await adminModel.findOne({ email, password });

        if (admin) {
            const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);
            res.json({
                message: "Admin signed in",
                token,
            });
        } else {
            res.status(403).json({
                message: "Incorrect credentials",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error during signin",
            error: error.message,
        });
    }
});

// Create a Course
adminRouter.post("/create-course", async (req, res) => {
    const { title, description, imageURL, price } = req.body;

    try {
        const course = await courseModel.create({
            title,
            description,
            imageURL,
            price,
        });

        res.json({
            message: "Admin created a course",
            courseId: course._id,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating course",
            error: error.message,
        });
    }
});

// Delete a Course
adminRouter.post("/delete-course", async (req, res) => {
    const { courseId } = req.body;

    try {
        const result = await courseModel.deleteOne({ _id: courseId });

        if (result.deletedCount > 0) {
            res.json({
                message: "Admin deleted a course",
            });
        } else {
            res.status(404).json({
                message: "Course not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting course",
            error: error.message,
        });
    }
});

// Add Content to a Course
adminRouter.post("/add-content", (req, res) => {
    res.json({
        message: "Admin added content to a course",
    });
});

module.exports = { adminRouter };
