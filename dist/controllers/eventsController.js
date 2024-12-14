"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventController = exports.updateEventsController = exports.createEventController = exports.getSingleEventsController = exports.getAllEventsController = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const eventService_1 = require("../services/eventService");
const fileName_1 = require("../filehandle/fileName");
exports.getAllEventsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allEvents = yield (0, eventService_1.getAllEvents)();
    if (!allEvents) {
        return res.status(404).json({ message: "No events found." });
    }
    res.status(200).json(allEvents);
    // console.log("All events:", allEventsResponse);
}));
exports.getSingleEventsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    console.log(eventId);
    console.log(req.params);
    const singleEvent = yield (0, eventService_1.getSingleEvent)(eventId);
    if (!singleEvent) {
        return res.status(404).json({ message: "Event not found." });
    }
    return res.status(200).json(singleEvent);
}));
exports.createEventController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, totalSeats, ticketPrice, eventDate } = req.body;
    const coverPhoto = yield (0, fileName_1.fileName)(req);
    const response = yield (0, eventService_1.postCreateEvent)(title, description, totalSeats, ticketPrice, eventDate, coverPhoto);
    if (!response) {
        res.status(404).json({ message: "Event creation failed" });
    }
    res.status(200).json({ message: "Event created successfully" });
}));
exports.updateEventsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, total_seats, ticket_price, event_date, cover_photo, } = req.body;
    const { eventId } = req.params;
    console.log(eventId);
    console.log(req.params);
    console.log("update Event data:", req.body);
    const response = yield (0, eventService_1.updateEvent)(eventId, title, description, total_seats, ticket_price, event_date, cover_photo);
    if (!response) {
        res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event updated successfully" });
}));
exports.deleteEventController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventId } = req.params;
    const response = yield (0, eventService_1.deleteSingleEvent)(eventId);
    if (!response) {
        res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
}));
