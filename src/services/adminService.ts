import { db } from "../config/dbconfig";
// import {admin } from "../interface/adminInterface";
import {
  adminDashboardQuery,
  getAdminIdQuery,
  getAdminInfoQuery,
  getAllAdminIdQuery,
} from "../database/postgresql/queries/adminQueries";
import bcrypt from "bcrypt";

export const getAdminId = async (email: string) => {
  // const hashPassword = await bcrypt.hash(password, 10);
  const adminemail=email
  const admin = await db(getAllAdminIdQuery);

  // console.log("getAllAdminId", admin);

  const adminPassword = await db(getAdminIdQuery, [adminemail]);

  // console.log("getAdminId", adminPassword);

  if (!adminPassword.rows) {
    throw new Error("Invalid email or password.");
  }
  return adminPassword.rows[0].password;
};

export const getAdminInfo = async (id: string) => {
  const adminInfo = await db(getAdminInfoQuery, [Number(id)])!;
  if (!adminInfo.rows[0]) {
    throw new Error("Admin not found.");
  }

  return adminInfo.rows[0];
  console.log("getAdminInfo", adminInfo.rows);
};

export const adminDashboardInfo = async () => {
  const dbresponse = await db(adminDashboardQuery);
  const dashboard = dbresponse.rows;
  console.log("adminDashboardInfo", dashboard)
  if (!dashboard) {
    return null;
  }
  return dashboard;
};
