import {
  postBookingService,
  getBookingInfoService,
} from "../services/bookingService";
import catchAsync from "../utils/catchAsync";
import { Request, Response } from "express";

export const postBookingController = catchAsync(
  async (req: Request, res: Response) => {
    const { userId, eventId, seats } = req.body;
    const bookingId = await postBookingService(userId, eventId, seats);
    return res.status(201).json({ message: "Booking successful", bookingId });
  }
);

export const getBookingInfoController = catchAsync(
  async (req: Request, res: Response) => {
    const { bookingId } = req.params;
    const bookingInfo = await getBookingInfoService(Number(bookingId));
    if (!bookingInfo) {
      return res.status(404).json({ message: "Booking info not found" });
    }
    return res.status(200).json(bookingInfo);
  }
);
