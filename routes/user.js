const { Router } = require("express");
const userRouter = Router();
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

// User Signup
userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        await userModel.create({
            email,
            password, // TODO: Hash the password for security
            firstName,
            lastName,
        });

        res.json({
            message: "User signed up",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error during signup",
            error: error.message,
        });
    }
});

// User Signin
userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (user && user.password === password) {
            const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
            res.json({
                message: "User signed in",
                token,
            });
        } else {
            res.status(403).json({
                message: "Invalid credentials",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error during signin",
            error: error.message,
        });
    }
});

// Purchase a Course
userRouter.post("/purchase", async (req, res) => {
    const { userId, courseId } = req.body;

    try {
        await purchaseModel.create({
            user: userId,
            course: courseId,
        });

        res.json({
            message: "User purchased a course",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error purchasing course",
            error: error.message,
        });
    }
});

// Get Purchased Courses
userRouter.get("/purchased-courses", async (req, res) => {
    const { userId } = req.query;

    try {
        const purchases = await purchaseModel.find({ user: userId });
        const courseIds = purchases.map((purchase) => purchase.course);

        const courses = await courseModel.find({ _id: { $in: courseIds } });
        res.json({
            message: "All purchased courses",
            courses,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching purchased courses",
            error: error.message,
        });
    }
});

module.exports = { userRouter };
