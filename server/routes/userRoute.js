const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
  getAllUsers,
  getAUser,
  updateRole,
  deleteUser,
} = require("../controllers/userController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isUserAuthenticated, getUserDetails);

router.route("/password/update").put(isUserAuthenticated, changePassword);

router.route("/me/update").put(isUserAuthenticated, updateProfile);

router
  .route("/admin/users")
  .get(isUserAuthenticated, authorizedRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isUserAuthenticated, authorizedRoles("admin"), getAUser)
  .put(isUserAuthenticated, authorizedRoles("admin"), updateRole)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteUser);

module.exports = router;
