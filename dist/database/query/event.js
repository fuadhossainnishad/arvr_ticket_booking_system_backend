"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingEventsQuery = exports.getSingleEventQuery = exports.getAllEventsQuery = exports.deleteSingleEventQuery = exports.updateSingleEventQuery = exports.insertEventQuery = void 0;
exports.insertEventQuery = `
    INSERT INTO events (title, description, totalSeats, ticketPrice, eventDate, coverPhoto)
    VALUES (?, ?, ?, ?, ?, ?);
`;
exports.updateSingleEventQuery = `
    UPDATE events
    SET 
        title = ?,
        description = ?,
        totalSeats = ?,
        ticketPrice = ?,
        eventDate = ?,
        coverPhoto = ?,
        updatedAt = NOW()
    WHERE id = ?;
`;
exports.deleteSingleEventQuery = `
 DELETE FROM events
 WHERE id = ?
 LIMIT 1;
`;
exports.getAllEventsQuery = `
SELECT * FROM events;
`;
exports.getSingleEventQuery = `
 SELECT * FROM events
 WHERE id = ?;
`;
exports.getUpcomingEventsQuery = `
 SELECT * FROM events
 WHERE eventDate > NOW()
 ORDER BY eventDate ASC;
`;
