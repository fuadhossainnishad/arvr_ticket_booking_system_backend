"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleEventQuery = exports.allEventQuery = exports.insertEventQuery = void 0;
exports.insertEventQuery = `INSERT INTO events (title, description, total_seats, ticket_price, event_date, cover_photo)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
exports.allEventQuery = `SELECT * FROM events;`;
exports.getSingleEventQuery = `SELECT * FROM events WHERE id = $1;`;
