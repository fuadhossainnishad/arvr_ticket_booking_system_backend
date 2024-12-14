"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const bookingsValidation_1 = require("../validation/bookingsValidation");
const bookingController_1 = require("../controllers/bookingController");
const bookingRoute = express_1.default.Router();
bookingRoute.post('/', (0, validateRequest_1.default)(bookingsValidation_1.postBookingValidation), bookingController_1.postBookingController);
bookingRoute.get('/:userId', bookingController_1.getBookingInfoController);
exports.default = bookingRoute;
