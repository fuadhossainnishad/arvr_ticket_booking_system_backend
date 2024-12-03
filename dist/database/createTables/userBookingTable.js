"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTableLib_1 = require("../../lib/createTableLib");
const createUserBookingTableQuery = `CREATE TABLE user_bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  seats_booked INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
`;
(0, createTableLib_1.createTableLib)(createUserBookingTableQuery);
