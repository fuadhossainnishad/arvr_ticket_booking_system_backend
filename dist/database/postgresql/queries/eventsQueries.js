"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingEventsQuery = exports.getAllEventsQuery = exports.deleteSingleEventQuery = exports.updateSingleEventQuery = exports.getSingleEventQuery = exports.allEventQuery = exports.insertEventQuery = void 0;
exports.insertEventQuery = `
INSERT INTO events (title, description, total_seats, ticket_price, event_date, cover_photo)
VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
exports.allEventQuery = `SELECT * FROM events;`;
exports.getSingleEventQuery = `SELECT * FROM events WHERE id = $1;`;
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
    WHERE id = $7
    RETURNING *;
`;
exports.deleteSingleEventQuery = `
    DELETE FROM events
    WHERE id = $1;
    RETURNING *;
`;
exports.getAllEventsQuery = `
    SELECT * FROM events;
`;
exports.getUpcomingEventsQuery = `
    SELECT * FROM events
    WHERE event_date > CURRENT_TIMESTAMP
    ORDER BY event_date ASC;
`;
