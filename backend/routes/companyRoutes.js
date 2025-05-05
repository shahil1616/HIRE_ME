import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { registerCompany,getCompany,getCompanyById,updateCompany } from "../controllers/companyController.js";

const router =express.Router();

router.post('/register',isAuthenticated, registerCompany);
router.get('/get',isAuthenticated,getCompany);
router.get('/get/:id',isAuthenticated,getCompanyById);
router.put('/update/:id',isAuthenticated,updateCompany);

export default router;