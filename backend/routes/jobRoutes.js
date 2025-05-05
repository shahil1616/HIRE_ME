import express from "express";
import {postJob,getAllJobs,getJobById,getAllJobByAdmin} from "../controllers/jobController.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.post('/post',isAuthenticated,postJob);
router.get('/get',isAuthenticated,getAllJobs);
router.get('/getadminjobs',isAuthenticated,getAllJobByAdmin);
router.get('/get/:id',isAuthenticated,getJobById);

export default router;


