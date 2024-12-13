export const bookingQuery = `
 INSERT INTO user_bookings(user_id,event_id,seats_booked)
  VALUES ($1,$2,$3) RETURNING id;
`;

export const bookingInfoQuery = `
 SELECT * FROM user_bookings
  WHERE user_id=$1;
`;
