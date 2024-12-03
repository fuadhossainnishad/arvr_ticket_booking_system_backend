import { Sequelize } from "sequelize";
import { dbconnfig } from "./dotenv.config";
import { Pool } from "pg";

const pool = new Pool(dbconnfig);

export const db = async (text: string, params?: any[]) => {
    const client = await pool.connect();
    try {
      const result = await client.query(text, params);
      return result;
    } finally {
      client.release();
    }
  };

//for orm support

export const sequelize = new Sequelize(
  dbconnfig.database!, 
  dbconnfig.user!,
  dbconnfig.password, 
  {
    host: dbconnfig.host, 
    port: dbconnfig.port,
    dialect: "postgres", 
    logging: console.log, 
  }
);

// const sequelize=new Sequelize(dbconnfig.url, username)


// import mysql from 'mysql2/promise'
// import { dbconnfig } from './dotenv.config'

// const db=mysql.createPool(dbconnfig)

// export default db