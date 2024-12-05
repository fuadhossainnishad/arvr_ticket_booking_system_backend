import dotenv from "dotenv";

dotenv.config();

// export const dbconnfig ={
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// }

export const dbconnfig = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  url: process.env.PGURL,
  port: Number(process.env.PGPORT),
};
console.log(dbconnfig);

export const cloudinaryConfig={
  cloud_name: process.env.CLDNNAME,
  api_key: process.env.CLDNAPIKEY,
  api_secret: process.env.CLDNAPISECRET,
}
