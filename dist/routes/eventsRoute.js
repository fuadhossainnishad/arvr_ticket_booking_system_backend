"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventsController_1 = require("../controllers/eventsController");
const createEventController_1 = __importDefault(require("../controllers/createEventController"));
const eventRoute = express_1.default.Router();
eventRoute.get("/", eventsController_1.getAllEventsController);
eventRoute.post("/", createEventController_1.default);
eventRoute.get("/:eventId", eventsController_1.getSingleEventsController);
eventRoute.put("/:eventId", eventsController_1.updateEventsController);
eventRoute.delete("/:eventId", eventsController_1.deleteEventController);
exports.default = eventRoute;
