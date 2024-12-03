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
const getEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const query = `SELECT * FROM events WHERE id = ?`;
        const [rows] = yield dbconfig_1.default.query(query, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Event not found." });
        }
        const event = rows[0];
        const fileBaseURL = `${req.protocol}://${req.get("host")}`; // Base URL for uploaded files
        event.coverPhoto = event.coverPhoto ? `${fileBaseURL}/${event.coverPhoto}` : "";
        res.json(event);
        console.log(event);
    }
    catch (error) {
        console.log("Error fetching event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = getEventController;
