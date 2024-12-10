import { Request, Response } from "express";
import {
  getAllUsers,
  getSingleUserId,
  getSingleUserInfo,
  getUserBookings,
  postSingleUser,
} from "../services/userServices";
import catchAsync from "../utils/catchAsync";

export const getSingleUserIdController = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    const userId = await getSingleUserId(email, password);
    if (!userId) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.status(200).json({ message: "SignIn successful", userId });
  }
);

export const getSingleUserInfoController = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const userInfo = await getSingleUserInfo(userId);
    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found", userInfo });
  }
);

export const getAllUsersController = catchAsync(
  async (req: Request, res: Response) => {
    const allUsers = await getAllUsers();
    if (!allUsers) {
      return null;
    }
    return res.status(200).json({ message: "All Users", allUsers });
  }
);

export const postSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { fullname, email, mobilenumber, password } = req.body;
    console.log(req.body);
    const postUser = await postSingleUser({
      fullname,
      email,
      mobilenumber,
      password,
    });

    if (!postUser) {
      return res.status(404).json({ message: "User not registered" });
    }
    return res.status(200).json({ message: "User signedUp successfully" });
    // console.log(postUser)
  }
);

export const userbookingController = catchAsync(
  async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const userbooking = await getUserBookings(user_id);
    if (!userbooking) {
      return res.status(404).json({ message: "User Bookings not found" });
    }
    return res
      .status(200)
      .json({ message: "User Bookings found successfully", userbooking });
  }
);
