"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllContactsQuery = exports.insertContactsQuery = void 0;
exports.insertContactsQuery = `
   INSERT INTO contacts (name,email,subject,message)
   VALUES ($1,$2,$3,$4)
   RETURNING contact_id;
`;
exports.getAllContactsQuery = `
   SELECT * FROM contacts;
`;
