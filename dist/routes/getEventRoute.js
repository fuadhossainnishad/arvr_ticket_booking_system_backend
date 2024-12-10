"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getEventController_1 = __importDefault(require("../controllers/getEventController"));
const getEventRoute = express_1.default.Router();
getEventRoute.get('/:id', getEventController_1.default);
exports.default = getEventRoute;
