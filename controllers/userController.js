const User = require('../models/userModel');
const catchAsyncErrors = require('../middlewares/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');
const crypto = require("crypto");
const sendToken = require('../utils/jwtToken');
// User Signup
exports.signup = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
    });

    // const token = await user.getJWTToken();
    // res.status(201).json({
    //     success: true,
    //     token
    // })
    sendToken(user, 201, res);
})

// User Login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    // checking have we got the email and password
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and/or password', 500));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = true;
    //  await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    // const token = await user.getJWTToken();
    // res.status(200).json({
    //     success: true,
    //     token,
    // })
    sendToken(user, 200, res);
})

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

// * Get list of all users (for admin)
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    })
})