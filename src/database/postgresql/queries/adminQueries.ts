export const getAdminIdQuery = `
  SELECT id, hashPassword 
  FROM admin
  WHERE email = $1 AND hashPassword = $2
`;

export const getAdminInfoQuery = `
  SELECT * 
  FROM admin
  WHERE id = $1
`;