import dotenv from 'dotenv'

dotenv.config()

// export const dbconnfig ={
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// }

export const dbconnfig ={
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    url:process.env.PSURL,
    port: Number(process.env.PGPORT)

}