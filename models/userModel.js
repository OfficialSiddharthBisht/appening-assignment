const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"],
        maxLength: [50, 'Cannot take name of this length'],
        minLength: [2, "Name should have more then 2 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email already exhists"],
        validate: [validator.isEmail, "Please enter valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password should be more then 8 characters for security purpose"],
        select: false, // when using find method in mongoose password will not be shown
    },
    role: {
        type: String,
        default: "user",
    },
})

module.exports = mongoose.model("User", userSchema);