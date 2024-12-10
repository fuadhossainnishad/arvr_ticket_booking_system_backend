import express from "express";
import {
  deleteEventController,
  getAllEventsController,
  updateEventsController,
} from "../controllers/eventsController";

import getEventController from "../controllers/getEventController";
import { postCreateEvent } from "../services/eventService";
import createEventController from "../controllers/createEventController";
const eventRoute = express.Router();

eventRoute.get("/", getAllEventsController);

eventRoute.get("/:eventId", getEventController);

eventRoute.post("/", createEventController);

eventRoute.put("/:eventId", updateEventsController);

eventRoute.delete("/:eventId", deleteEventController);

export default eventRoute;
