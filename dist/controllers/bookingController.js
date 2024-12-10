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
exports.getBookingInfoController = exports.postBookingController = void 0;
const bookingService_1 = require("../services/bookingService");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.postBookingController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, eventId, seats } = req.body;
    const bookingId = yield (0, bookingService_1.postBookingService)(userId, eventId, seats);
    return res.status(201).json({ message: "Booking successful", bookingId });
}));
exports.getBookingInfoController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookingId } = req.params;
    const bookingInfo = yield (0, bookingService_1.getBookingInfoService)(Number(bookingId));
    if (!bookingInfo) {
        return res.status(404).json({ message: "Booking info not found" });
    }
    return res.status(200).json(bookingInfo);
}));
