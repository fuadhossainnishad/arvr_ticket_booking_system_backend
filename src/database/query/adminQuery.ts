export const getAdminIdQuery=`SELECT id,hashPassword from admin
WHERE email=? AND hashPassword=?`

export const getAdminInfoQuery=`
SELECT * FROM admin
WHERE id=?
`