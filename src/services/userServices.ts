import {db} from "../config/dbconfig";
import { userQuery } from "../database/query/userQueries";
import { User } from "../interface/userInterface";
import bcrypt from "bcrypt";

export const getSingleUserId = async (email: string, password: string) => {
  const dbresponse = (await db(userQuery.getSingleUserIdQuery, [
    email,
  ]))!;

  if (!dbresponse.rows[0]) {
    return null;
  }
  const user = dbresponse.rows[0];
  const checkPassword = await bcrypt.compare(password, user.hashPassword);
  if (!checkPassword) {
    return null;
  }
  return user.id;
};

export const getSingleUserInfo = async (id: string) => {
  const dbresponse = (await db(
    userQuery.getSingleUserInfoQuery,
    [id]
  ))!;
  if (!dbresponse.rows[0]) {
    return null;
  }
  return dbresponse.rows[0];
};

export const getAllUsers = async () => {
  const dbresponse= (await db(userQuery.getAllUserQuery))!;
  return dbresponse.rows;
};

export const postSingleUser = async (user: {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
}) => {
  const { fullName, email, mobileNumber, password } = user;
  const hashPassword = await bcrypt.hash(password, 10);
  const dbresponse= (await db(userQuery.insertSingleUserQuery, [
    fullName,
    email,
    mobileNumber,
    hashPassword,
  ]))!;
  return dbresponse.rows[0];
};
