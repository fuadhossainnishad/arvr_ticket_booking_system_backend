// import { Sequelize } from "sequelize";
import { dbconfig } from "./dotenv.config";
import { Pool } from "pg";

const pool = new Pool(dbconfig);

export const db = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  } finally {
    client.release();
  }
};

//for orm support

// export const sequelize = new Sequelize(
//   dbconfig.database!,
//   dbconfig.user!,
//   dbconfig.password,
//   {
//     host: dbconfig.host,
//     port: dbconfig.port,
//     dialect: "postgres",
//     logging: console.log,
//   }
// );

// const sequelize=new Sequelize(dbconnfig.url, username)

// import mysql from 'mysql2/promise'
// import { dbconnfig } from './dotenv.config'

// const db=mysql.createPool(dbconnfig)

// export default db
