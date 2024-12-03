"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventTableQuery = exports.createEventTableQuery2 = void 0;
exports.createEventTableQuery2 = `CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    totalSeats INT NOT NULL,
    ticketPrice DECIMAL(10, 2) NOT NULL,
    eventDate DATE NOT NULL,
    coverPhoto VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;
//For mysql version 5.5.6
exports.createEventTableQuery = `CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    totalSeats INT NOT NULL,
    ticketPrice DECIMAL(10, 2) NOT NULL,
    eventDate DATE NOT NULL,
    coverPhoto VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
);

DELIMITER //

CREATE TRIGGER update_timestamp
BEFORE UPDATE ON events
FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END; //

DELIMITER ;
`;
