"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminInfoQuery = exports.getAdminIdQuery = void 0;
exports.getAdminIdQuery = `SELECT id,hashPassword from admin
WHERE email=? AND hashPassword=?`;
exports.getAdminInfoQuery = `
SELECT * FROM admin
WHERE id=?
`;
