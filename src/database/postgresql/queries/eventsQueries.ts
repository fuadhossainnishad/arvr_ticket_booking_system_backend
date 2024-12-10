export const insertEventQuery = `
INSERT INTO events (title, description, total_seats, ticket_price, event_date, cover_photo)
VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;

export const allEventQuery = `SELECT * FROM events;`;

export const getSingleEventQuery = `SELECT * FROM events WHERE id = $1;`;

export const updateSingleEventQuery = `
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

export const deleteSingleEventQuery = `
    DELETE FROM events
    WHERE id = $1;
    RETURNING *;
`;

export const getAllEventsQuery = `
    SELECT * FROM events;
`;

export const getUpcomingEventsQuery = `
    SELECT * FROM events
    WHERE event_date > CURRENT_TIMESTAMP
    ORDER BY event_date ASC;
`;
