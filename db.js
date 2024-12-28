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
    imageURL: String,
    creatorId: { type: ObjectId, ref: "Admin" },
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

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
