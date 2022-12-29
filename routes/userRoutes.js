const express = require('express');
const { signup, loginUser, logout, getAllUsers } = require('../controllers/userController');
const { authorizeRoles, isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);

// admin routes
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

module.exports = router;