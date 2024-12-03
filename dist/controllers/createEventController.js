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
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const fileName_1 = require("../filehandle/fileName");
const createEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, totalSeats, ticketPrice, eventDate } = req.body;
    if (!req.file) {
        return res.status(400).json({ error: "Cover photo is required" });
    }
    const coverPhoto = yield (0, fileName_1.fileName)(req);
    try {
        const [result] = yield dbconfig_1.default.query(`INSERT INTO events (title, description, totalSeats, ticketPrice, eventDate, coverPhoto) VALUES (?, ?, ?, ?, ?, ?)`, [title, description, totalSeats, ticketPrice, eventDate, coverPhoto]);
        res.status(200).json({
            status: "success",
            message: "Event created successfully",
            eventId: result.insertId,
        });
    }
    catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = createEventController;
