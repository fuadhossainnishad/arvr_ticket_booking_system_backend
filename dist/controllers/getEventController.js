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
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = require("../config/dbconfig");
const eventsQueries_1 = require("../database/postgresql/queries/eventsQueries");
const getEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = (yield (0, dbconfig_1.db)(eventsQueries_1.getSingleEventQuery, [id]));
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Event not found." });
        }
        const event = result.rows[0];
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
