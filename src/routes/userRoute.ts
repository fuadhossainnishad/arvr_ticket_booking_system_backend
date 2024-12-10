import express from "express";
import validateRequest from "../middlewares/validateRequest";
import {
  getAllUsersController,
  getSingleUserIdController,
  getSingleUserInfoController,
  postSingleUserController,
  userbookingController,
} from "../controllers/userController";
import { UserValiation } from "../validation/userValidation";

const userRoute = express.Router();
userRoute.post(
  "/signup/",
  validateRequest(UserValiation.createUserSignUpValidationSchema),
  postSingleUserController
);

userRoute.post(
  "/signin/",
  validateRequest(UserValiation.userSignInValidationSchema),
  getSingleUserIdController
);

userRoute.get("/", getAllUsersController);

userRoute.post("/:userId", getSingleUserInfoController);

userRoute.get('/bookings/:userId',userbookingController);

export default userRoute;
