// import express from "express";
// import userRoutes from "./userRoutes.js";
// import taskRoutes from "./taskRoutes.js";

// const router = express.Router();

// router.use("/user", userRoutes); //api/user/login
// router.use("/task", taskRoutes);

// export default router;

import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getTeamList,
  getNotificationsList,
  updateUserProfile,
  markNotificationRead,
  changeUserPassword,
  activateUserProfile,
  deleteUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

// User Routes
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Login a user
router.post("/logout", logoutUser); // Logout a user

// Team Routes
router.get("/team", getTeamList); // Get list of team members

// Notification Routes
router.get("/notifications", getNotificationsList); // Get list of notifications
router.put("/notifications/mark-read", markNotificationRead); // Mark notifications as read

// User Profile Routes
router.put("/profile", updateUserProfile); // Update user profile
router.put("/profile/password", changeUserPassword); // Change user password
router.put("/profile/activate", activateUserProfile); // Activate/deactivate user profile
router.delete("/profile", deleteUserProfile); // Delete user profile

export default router;
