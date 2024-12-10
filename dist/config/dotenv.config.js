"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontendConfig = exports.cloudinaryConfig = exports.dbconfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// export const dbconnfig ={
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// }
exports.dbconfig = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    // url: process.env.PGURL,
    port: Number(process.env.PGPORT) || 5432,
    ssl: {
        rejectUnauthorized: false, // Required for Render's SSL
    },
};
// console.log(dbconfig);
// console.log('Environment Variables:', process.env);
exports.cloudinaryConfig = {
    cloud_name: process.env.CLDNNAME,
    api_key: process.env.CLDNAPIKEY,
    api_secret: process.env.CLDNAPISECRET,
    secure: true,
};
exports.frontendConfig = {
    frontend: process.env.FRONTENDURL,
};
