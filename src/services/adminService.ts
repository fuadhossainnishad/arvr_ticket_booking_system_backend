import db from "../config/dbconfig";
import { Admin } from "../interface/adminInterface";
import {
  getAdminIdQuery,
  getAdminInfoQuery,
} from "../database/query/adminQuery";
import bcrypt from "bcrypt";

export const getAdminId = async (email: string, password: string) => {
  const hashPassword = await bcrypt.hash(password, 10);
  const [adminId] = await db.query<Admin[]>(getAdminIdQuery, [
    email,
    hashPassword,
  ]);
  if (!adminId) {
    throw new Error("Invalid email or password.");
  }
  return adminId;
};

export const getAdminInfo = async (id: string) => {
  const [adminInfo] = await db.query<Admin[]>(getAdminInfoQuery, [id]);
  if (!adminInfo) {
    throw new Error("Admin not found.");
  }

  return adminInfo;
};
