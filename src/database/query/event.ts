export const insertEventQuery = `
    INSERT INTO events (title, description, totalSeats, ticketPrice, eventDate, coverPhoto)
    VALUES (?, ?, ?, ?, ?, ?);
`;

export const updateSingleEventQuery = `
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
export const deleteSingleEventQuery = `
 DELETE FROM events
 WHERE id = ?
 LIMIT 1;
`;

export const getAllEventsQuery = `
SELECT * FROM events;
`;
export const getSingleEventQuery = `
 SELECT * FROM events
 WHERE id = ?;
`;

export const getUpcomingEventsQuery = `
 SELECT * FROM events
 WHERE eventDate > NOW()
 ORDER BY eventDate ASC;
`;
