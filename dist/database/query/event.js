"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingEventsQuery = exports.getSingleEventQuery = exports.getAllEventsQuery = exports.deleteSingleEventQuery = exports.updateSingleEventQuery = exports.insertEventQuery = void 0;
exports.insertEventQuery = `
    INSERT INTO events (title, description, total_seats, ticket_price, event_date, cover_photo)
    VALUES ($1, $2, $3, $4, $5, $6);
`;
exports.updateSingleEventQuery = `
    UPDATE events
    SET 
        title = $1,
        description = $2,
        total_seats = $3,
        ticket_price = $4,
        event_date = $5,
        cover_photo = $6,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = $7;
`;
exports.deleteSingleEventQuery = `
    DELETE FROM events
    WHERE id = $1;
`;
exports.getAllEventsQuery = `
    SELECT * FROM events;
`;
exports.getSingleEventQuery = `
    SELECT * FROM events
    WHERE id = $1;
`;
exports.getUpcomingEventsQuery = `
    SELECT * FROM events
    WHERE event_date > CURRENT_TIMESTAMP
    ORDER BY event_date ASC;
`;
