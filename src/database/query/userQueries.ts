const getAllUserQuery = `SELECT * FROM users`;

const getSingleUserIdQuery = `SELECT id,password FROM users
WHERE email=?
`;
const getSingleUserInfoQuery = `SELECT * FROM users
WHERE id=?`;

const insertSingleUserQuery = `INSERT INTO users (fullname,email,mobileNumber,hashPassword)
VALUES (?,?,?)
`;

export const userQuery = {
  getAllUserQuery,
  getSingleUserInfoQuery,
  getSingleUserIdQuery,
  insertSingleUserQuery,
};
