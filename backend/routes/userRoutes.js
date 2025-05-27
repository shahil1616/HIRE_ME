import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", upload, register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/update/profile", isAuthenticated, updateProfile);

export default router;
