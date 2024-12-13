import express from "express";
import {
  deleteEventController,
  getAllEventsController,
  getSingleEventsController,
  updateEventsController,
} from "../controllers/eventsController";
import { postCreateEvent } from "../services/eventService";
import createEventController from "../controllers/createEventController";
const eventRoute = express.Router();

eventRoute.get("/", getAllEventsController);
eventRoute.post("/", createEventController);

eventRoute.get("/:eventId", getSingleEventsController);
eventRoute.put("/:eventId", updateEventsController);
eventRoute.delete("/:eventId", deleteEventController);

export default eventRoute;
