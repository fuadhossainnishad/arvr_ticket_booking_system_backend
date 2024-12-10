import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import {
  deleteSingleEvent,
  getAllEvents,
  getSingleEvent,
  postCreateEvent,
  updateEvent,
} from "../services/eventService";
import { fileName } from "../filehandle/fileName";

export const getAllEventsController = catchAsync(
  async (req: Request, res: Response) => {
    const allEvents = await getAllEvents();
    if (!allEvents) {
      return res.status(404).json({ message: "No events found." });
    }
    res.status(200).json(allEvents);
    // console.log("All events:", allEventsResponse);
  }
);

export const getSingleEventsController = catchAsync(
  async (req: Request, res: Response) => {
    const eventId  = req.params.eventId;
    console.log(eventId);
    console.log(req.params)
    const singleEvent = await getSingleEvent(eventId);
    if (!singleEvent) {
      return res.status(404).json({ message: "Event not found." });
    }
    return res.status(200).json(singleEvent);
  }
);

export const createEventController = catchAsync(
  async (req: Request, res: Response) => {
    const { title, description, totalSeats, ticketPrice, eventDate } = req.body;
    const coverPhoto = await fileName(req);
    const response = await postCreateEvent(
      title,
      description,
      totalSeats,
      ticketPrice,
      eventDate,
      coverPhoto
    );

    if (!response) {
      res.status(404).json({ message: "Event creation failed" });
    }

    res.status(200).json({ message: "Event created successfully" });
  }
);


export const updateEventsController = catchAsync(
  async (req: Request, res: Response) => {
    const {
      title,
      description,
      totalSeats,
      ticketPrice,
      eventDate,
      coverPhoto,
    } = req.body;
    const { eventId } = req.params;
console.log(eventId);
console.log(req.params)
    const response = await updateEvent(
      eventId,
      title,
      description,
      totalSeats,
      ticketPrice,
      eventDate,
      coverPhoto
    );

    if (!response) {
      res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event updated successfully" });
  }
);

export const deleteEventController = catchAsync(
  async (req: Request, res: Response) => {
    const { eventId } = req.params;
    const response = await deleteSingleEvent(eventId);
    if (!response) {
      res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  }
);
