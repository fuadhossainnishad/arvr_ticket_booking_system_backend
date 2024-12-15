import { db } from "../config/dbconfig";
import {
  getAllContactsQuery,
  insertContactsQuery,
} from "../database/postgresql/queries/contactsQueries";

export const postContactService = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const response = await db(insertContactsQuery, [
    name,
    email,
    subject,
    message,
  ]);
  if (!response) {
    return null;
  }
  const contact_id = response.rows[0].contact_id;
  return contact_id;
};

export const getContactsService = async () => {
  const response = await db(getAllContactsQuery);
  if (!response) {
    return null;
  }
  const contacts = response.rows;
  console.log(contacts);
  return contacts;
};
