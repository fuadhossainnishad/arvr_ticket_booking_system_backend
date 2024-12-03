export const insertEventQuery = `INSERT INTO events (title, description, total_seats, ticket_price, event_date, cover_photo)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;


export const allEventQuery = `SELECT * FROM events;`

export const getSingleEventQuery = `SELECT * FROM events WHERE id = $1;`;
