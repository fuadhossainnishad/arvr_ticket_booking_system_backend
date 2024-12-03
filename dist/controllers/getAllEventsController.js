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
exports.getAllEventsController = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const getAllEventsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allEventquery = `SELECT * FROM events`;
    try {
        const [allEventsResponse] = yield dbconfig_1.default.query(allEventquery);
        if (!allEventsResponse) {
            return res.status(404).json({ message: "No events found." });
        }
        res.status(200).json(allEventsResponse);
        console.log("All events:", allEventsResponse);
    }
    catch (error) {
        res.status(500).send("Server error for query all events");
        console.log("All event:", error);
    }
});
exports.getAllEventsController = getAllEventsController;
