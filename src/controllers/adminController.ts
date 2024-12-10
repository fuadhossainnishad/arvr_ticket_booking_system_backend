import {
  getAdminId,
  getAdminInfo,
  adminDashboardInfo,
} from "../services/adminService";
import catchAsync from "../utils/catchAsync";
import { Request, Response } from "express";

export const getAdminIdController = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    const adminPassword =await getAdminId(email);
    console.log(adminPassword);
    
    if (!adminPassword) {
      return res.status(404).json({ message: "Admin not found" });
    } else if (adminPassword === password) {
        return res.status(200).json({ message: "Admin SignIn Successfully" });
    } else {
      return res.status(404).json({ message: "Admin not found" });

    }
  }
);

export const getAdminInfoController = catchAsync(
  async (req: Request, res: Response) => {
    const { adminId } = req.params;
    console.log(req.params)
    const adminInfo = getAdminInfo(adminId);
    if (!adminInfo) {
      res.status(404).json({ message: "Admin not found" });
    }
    return res
      .status(200)
      .json({ message: "Admin found successfully", adminInfo });
  }
);

export const getAdminDashboardController = catchAsync(
  async (req: Request, res: Response) => {
    const admindashboard = await adminDashboardInfo();
    console.log(admindashboard)
    if (!admindashboard) {
      res.status(404).json({ message: "Admin Dashboard not found" });
    }
    return res.status(200).json({ message: "Admin Dashboard", admindashboard });
    console.log(admindashboard);
  }
);
