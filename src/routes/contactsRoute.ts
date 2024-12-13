import express from "express";
import { RequestHandler } from "express";
import validateRequest from "../middlewares/validateRequest";
import { postBookingValidation } from "../validation/bookingsValidation";
import {
  getContactController,
  postContactController,
} from "../controllers/contactsController";
import { postContactValidation } from "../validation/contactsValidation";

const contactRoute = express.Router();

contactRoute.post(
  "/",
  validateRequest(postContactValidation),
  postContactController
);
contactRoute.get("/", getContactController);

export default contactRoute;
