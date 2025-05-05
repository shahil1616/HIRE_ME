import {
  appyJob,
  getApllicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/applicationControllers.js";
import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.get("/apply/:id", isAuthenticated, appyJob);
router.get("/get", isAuthenticated, getAppliedJobs);
router.get("/:id/applicants", isAuthenticated, getApllicants);
router.post("/status/:id/update", isAuthenticated, updateStatus);

export default router;
