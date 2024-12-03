"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllEventsController_1 = require("../controllers/getAllEventsController");
const getAllEventRoute = express_1.default.Router();
getAllEventRoute.get('/events', getAllEventsController_1.getAllEventsController);
exports.default = getAllEventRoute;
