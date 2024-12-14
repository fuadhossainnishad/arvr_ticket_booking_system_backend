"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingInfoQuery = exports.bookingQuery = void 0;
exports.bookingQuery = `
 INSERT INTO user_bookings(user_id,event_id,seats_booked)
  VALUES ($1,$2,$3) RETURNING id;
`;
exports.bookingInfoQuery = `
 SELECT * FROM user_bookings
  WHERE user_id=$1;
`;
