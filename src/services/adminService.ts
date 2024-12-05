import { db } from "../config/dbconfig";
// import { Admin } from "../interface/adminInterface";
import {
  getAdminIdQuery,
  getAdminInfoQuery,
} from "../database/postgresql/queries/adminQueries";
import bcrypt from "bcrypt";

export const getAdminId = async (email: string, password: string) => {
  // const hashPassword = await bcrypt.hash(password, 10);
  const adminId = (await db(getAdminIdQuery, [email, password]))!;
  if (!adminId.rows[0]) {
    throw new Error("Invalid email or password.");
  }
  return adminId.rows[0];
};

export const getAdminInfo = async (id: string) => {
  const adminInfo = (await db(getAdminInfoQuery, [id]))!;
  if (!adminInfo.rows[0]) {
    throw new Error("Admin not found.");
  }

  return adminInfo.rows[0];
};
