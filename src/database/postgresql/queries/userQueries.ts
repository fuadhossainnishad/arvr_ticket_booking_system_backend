
const getAllUserQuery = `
  SELECT * 
  FROM users
`;

const getSingleUserIdQuery = `
  SELECT id, password 
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
`;

export const userQuery = {
  getAllUserQuery,
  getSingleUserInfoQuery,
  getSingleUserIdQuery,
  insertSingleUserQuery,
};