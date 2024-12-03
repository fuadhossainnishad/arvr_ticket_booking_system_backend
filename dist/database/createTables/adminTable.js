"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTableLib_1 = require("../../lib/createTableLib");
const createAdminTableQuery = `
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`;
(0, createTableLib_1.createTableLib)(createAdminTableQuery);
