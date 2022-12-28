const User = require('../models/userModel');
const catchAsyncErrors = require('../middlewares/catchAsyncError');

// User Signup
exports.signup = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        success: true,
    })
})