const mongoose = require("mongoose");

// Define schemas
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
});

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
});

const purchaseSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    course: { type: ObjectId, ref: "Course" },
});

// Define models
const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);

// MongoDB automatically converts the model names (e.g., "User") to lowercase and pluralized collection names (e.g., "users").
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
