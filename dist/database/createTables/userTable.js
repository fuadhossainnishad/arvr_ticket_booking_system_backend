"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTableLib_1 = require("../../lib/createTableLib");
const createUserTableQuery = `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  mobileNumber VARCHAR(15),
  hashPassword VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;
(0, createTableLib_1.createTableLib)(createUserTableQuery);
