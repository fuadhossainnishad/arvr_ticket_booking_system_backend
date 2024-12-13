const getAllUserQuery = `
  SELECT * 
  FROM users
`;

const getSingleUserIdQuery = `
  SELECT id, hashPassword  
  FROM users
  WHERE email = $1
`;

const getSingleUserInfoQuery = `
  SELECT * 
  FROM users
  WHERE id = $1
`;

const insertSingleUserQuery = `
  INSERT INTO users (fullname, email, mobileNumber, hashPassword)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;

const userBookingsQuery = `
SELECT 
    ub.id AS booking_id,
    ub.seats_booked,
    e.id AS event_id,
    e.title AS event_title,
    e.description AS event_description,
    e.event_date,
    e.ticket_price,
    e.cover_photo
FROM 
    user_bookings ub
JOIN 
    events e ON ub.event_id = e.id
WHERE 
    ub.user_id = $1;
`;

export const userQuery = {
  getAllUserQuery,
  getSingleUserInfoQuery,
  getSingleUserIdQuery,
  insertSingleUserQuery,
  userBookingsQuery,
};
