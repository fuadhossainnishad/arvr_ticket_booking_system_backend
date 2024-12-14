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
exports.deleteSingleEvent = exports.updateEvent = exports.postCreateEvent = exports.getSingleEvent = exports.getAllEvents = void 0;
const dbconfig_1 = require("../config/dbconfig");
const eventsQueries_1 = require("../database/postgresql/queries/eventsQueries");
const event_1 = require("../database/query/event");
const getAllEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, dbconfig_1.db)(eventsQueries_1.allEventQuery);
    const allEventsResponse = response.rows;
    console.log("allEventsResponse", response.rows);
    if (!allEventsResponse) {
        return null;
    }
    return allEventsResponse;
});
exports.getAllEvents = getAllEvents;
const getSingleEvent = (event_id) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(event_id);
    console.log(id);
    const response = yield (0, dbconfig_1.db)(event_1.getSingleEventQuery, [id]);
    const singleEventResponse = response.rows[0];
    console.log("singleEventResponse", response.rows);
    if (!singleEventResponse) {
        return null;
    }
    return singleEventResponse;
});
exports.getSingleEvent = getSingleEvent;
const postCreateEvent = (title, description, totalSeats, ticketPrice, eventDate, coverPhoto) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, dbconfig_1.db)(event_1.insertEventQuery, [
        title,
        description,
        totalSeats,
        ticketPrice,
        eventDate,
        coverPhoto,
    ]);
    const eventId = result.rows[0].id;
    console.log("postCreateEvent", result.rows);
    if (!eventId) {
        return null;
    }
    return eventId;
});
exports.postCreateEvent = postCreateEvent;
const updateEvent = (eventId, title, description, totalSeats, ticketPrice, eventDate, coverPhoto) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(eventId);
    console.log(id);
    const response = yield (0, dbconfig_1.db)(event_1.updateSingleEventQuery, [
        title,
        description,
        Number(totalSeats),
        Number(ticketPrice),
        eventDate,
        coverPhoto,
        id,
    ]);
    console.log("updateEvent", response.rows);
    if (!response.rowCount) {
        return null;
    }
    return true;
});
exports.updateEvent = updateEvent;
const deleteSingleEvent = (eventId) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(eventId);
    console.log(id);
    const response = yield (0, dbconfig_1.db)(event_1.deleteSingleEventQuery, [id]);
    console.log("deleteSingleEvent", response.rows);
    if (!response.rowCount) {
        return null;
    }
    return true;
});
exports.deleteSingleEvent = deleteSingleEvent;
