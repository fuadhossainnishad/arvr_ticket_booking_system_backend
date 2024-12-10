"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventRoute = void 0;
const express_1 = __importDefault(require("express"));
const createEvent_1 = __importDefault(require("../filehandle/createEvent"));
const createEventController_1 = __importDefault(require("../controllers/createEventController"));
const createEventRoute = express_1.default.Router();
exports.createEventRoute = createEventRoute;
createEventRoute.post('/event', createEvent_1.default.single("coverPhoto"), createEventController_1.default);
