export const insertContactsQuery = `
   INSERT INTO contacts (name,email,subject,message)
   VALUES ($1,$2,$3,$4)
   RETURNING contact_id;
`;

export const getAllContactsQuery = `
   SELECT * FROM contacts;
`;
