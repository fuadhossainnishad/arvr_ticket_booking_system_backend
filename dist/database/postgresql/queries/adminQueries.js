"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminInfoQuery = exports.getAdminIdQuery = void 0;
exports.getAdminIdQuery = `
  SELECT id, hashPassword 
  FROM admin
  WHERE email = $1 AND hashPassword = $2
`;
exports.getAdminInfoQuery = `
  SELECT * 
  FROM admin
  WHERE id = $1
`;
