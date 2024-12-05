import { Request, Response } from "express";
import {
  getAllUsers,
  getSingleUserId,
  getSingleUserInfo,
  postSingleUser,
} from "../services/userServices";
import catchAsync from "../utils/catchAsync";

export const getSingleUserIdController = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
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
    return res.status(200).json({ message: "User found",userInfo });
  }
);

export const getAllUsersController = catchAsync(
  async (req: Request, res: Response) => {
    const allUsers = await getAllUsers;
    if (!allUsers) {
      return null;
    }
    return res.status(200).json({ message: "All Users", allUsers });
  }
);

export const postSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { fullName, email, mobileNumber, password } = req.body;
    const postUser = await postSingleUser({
      fullName,
      email,
      mobileNumber,
      password,
    });

    if (!postUser) {
      return res.status(404).json({ message: "User not registered" });
    }
    return res.status(200).json({ message: "User signedUp successfully" });
    // console.log(postUser)
  }
);
