import express from "express";
import validateRequest from "../middlewares/validateRequest";
import {
  getAllUsersController,
  getSingleUserIdController,
  postSingleUserController,
} from "../controllers/userController";
import { UserValiation } from "../validation/userValidation";

const getUserRoute = express.Router();
getUserRoute.post(
  "/signup/user",
  validateRequest(UserValiation.createUserSignUpValidationSchema),
  postSingleUserController
);

getUserRoute.post(
  "/signin/user",
  validateRequest(UserValiation.userSignInValidationSchema),
  getSingleUserIdController
);

getUserRoute.get("/user", getAllUsersController);

getUserRoute.get("/user/:{userId}", getSingleUserIdController);

export default getUserRoute;
