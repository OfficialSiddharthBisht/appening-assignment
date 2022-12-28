const express = require('express');
const { signup, loginUser } = require('../controllers/userController')

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(loginUser);


module.exports = router;