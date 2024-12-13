import express from "express";
import validateRequest from "../middlewares/validateRequest";
import { UserValiation } from "../validation/userValidation";
import {
  getAdminDashboardController,
  getAdminIdController,
  getAdminInfoController,
} from "../controllers/adminController";

const adminRoute = express.Router();

// getAdminRoute.post('/signin/admin',validateRequest(UserValiation.userSignInValidationSchema),getAdminIdController)
adminRoute.post("/signin", getAdminIdController);
adminRoute.get("/dashboard", getAdminDashboardController);
adminRoute.get("/:adminId", getAdminInfoController);
export default adminRoute;
