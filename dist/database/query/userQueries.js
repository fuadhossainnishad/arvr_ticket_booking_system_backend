"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueries = void 0;
const getAllUserQuery = `SELECT * FROM users`;
const getSingleUserIdQuery = `SELECT id,password FROM users
WHERE email=?
`;
const getSingleUserInfoQuery = `SELECT * FROM users
WHERE id=?`;
const insertSingleUserQuery = `INSERT INTO users (fullname,email,mobileNumber,hashPassword)
VALUES (?,?,?)
`;
exports.userQueries = {
    getAllUserQuery,
    getSingleUserInfoQuery,
    getSingleUserIdQuery,
    insertSingleUserQuery,
};
