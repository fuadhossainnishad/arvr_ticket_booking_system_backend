import db from "../config/dbconfig";
import { userQuery } from "../database/query/userQueries";
import { User } from "../interface/userInterface";
import bcrypt from "bcrypt";

export const getSingleUserId = async (email: string, password: string) => {
  const [dbresponse] = await db.query<User[]>(userQuery.getSingleUserIdQuery, [
    email,
  ]);

  if (!dbresponse) {
    return null;
  }
  const user = dbresponse[0];
  const checkPassword = await bcrypt.compare(password, user.hashPassword);
  if (!checkPassword) {
    return null;
  }
  return user.id;
};

export const getSingleUserInfo = async (id: string) => {
  const [dbresponse] = await db.query<User[]>(
    userQuery.getSingleUserInfoQuery,
    [id]
  );
  if (!dbresponse) {
    return null;
  }
  return dbresponse[0];
};

export const getAllUsers = async () => {
  const [dbresponse] = await db.query<User[]>(userQuery.getAllUserQuery);
  return dbresponse;
};

export const postSingleUser = async (user: {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
}) => {
  const { fullName, email, mobileNumber, password } = user;
  const hashPassword = await bcrypt.hash(password, 10);
  const [dbresponse] = await db.query<User[]>(userQuery.insertSingleUserQuery, [
    fullName,
    email,
    mobileNumber,
    hashPassword,
  ]);
  return dbresponse;
};
