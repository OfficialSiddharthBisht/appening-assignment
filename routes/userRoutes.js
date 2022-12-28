const express = require('express');
const { signup, loginUser, logout } = require('../controllers/userController')

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);


module.exports = router;