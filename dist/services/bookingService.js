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
exports.getBookingInfoService = exports.postBookingService = void 0;
const dbconfig_1 = require("../config/dbconfig");
const bookingQueries_1 = require("../database/postgresql/queries/bookingQueries");
const userQueries_1 = require("../database/postgresql/queries/userQueries");
const postBookingService = (userId, eventId, seats) => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = yield (0, dbconfig_1.db)(bookingQueries_1.bookingQuery, [userId, eventId, seats]);
    const bookingId = dbresponse.rows;
    if (!bookingId) {
        return null;
    }
    return bookingId;
    console.log("bookingId", bookingId);
});
exports.postBookingService = postBookingService;
const getBookingInfoService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = yield (0, dbconfig_1.db)(userQueries_1.userQuery.userBookingsQuery, [userId]);
    const bookingInfo = dbresponse.rows;
    if (!bookingInfo) {
        return null;
    }
    return bookingInfo;
    console.log("bookingInfo:", bookingInfo);
});
exports.getBookingInfoService = getBookingInfoService;
