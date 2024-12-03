export const pgCreateEventsTable=`CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    total_seats INT NOT NULL,
    ticket_price DECIMAL(10, 2) NOT NULL,
    event_date DATE NOT NULL,
    cover_photo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`