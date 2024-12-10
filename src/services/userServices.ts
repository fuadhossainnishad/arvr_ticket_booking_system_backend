import { db } from "../config/dbconfig";
import { userQuery } from "../database/postgresql/queries/userQueries";
// import { User } from "../interface/userInterface";
import bcrypt from "bcrypt";

export const getSingleUserId = async (email: string, password: string) => {
  const dbresponse = await db(userQuery.getSingleUserIdQuery, [email]);

  if (!dbresponse.rows[0]) {
    return null;
  }
  const user = dbresponse.rows[0];
  const checkPassword = await bcrypt.compare(password, user.hashpassword);
  if (!checkPassword) {
    return null;
  }
  return user.id;
  console.log("getSingleUserInfo", dbresponse.rows);
};

export const getSingleUserInfo = async (id: string) => {
  const dbresponse = (await db(userQuery.getSingleUserInfoQuery, [id]))!;
  if (!dbresponse.rows) {
    return null;
  }
  return dbresponse.rows;
  console.log("getSingleUserInfo", dbresponse.rows);
};

export const getAllUsers = async () => {
  const dbresponse = (await db(userQuery.getAllUserQuery))!;
  return dbresponse.rows;
};

export const postSingleUser = async (user: {
  fullname: string;
  email: string;
  mobilenumber: string;
  password: string;
}) => {
  const { fullname, email, mobilenumber, password } = user;
  const hashPassword = await bcrypt.hash(password, 10);
  const dbresponse = await db(userQuery.insertSingleUserQuery, [
    fullname,
    email,
    mobilenumber,
    hashPassword,
  ]);
  return dbresponse.rows;
  console.log("dbresponse.rows:", dbresponse.rows);
};

export const getUserBookings = async (user_id: string) => {
  const dbresponse = await db(userQuery.userBookingsQuery, [user_id]);
  const userbooking = dbresponse.rows;
  if (!userbooking) {
    return null;
  }
  return userbooking;
  console.log("userbooking:", userbooking);
};
