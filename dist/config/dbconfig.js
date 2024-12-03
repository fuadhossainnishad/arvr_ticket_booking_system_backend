"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv_config_1 = require("./dotenv.config");
const pg_1 = require("pg");
const pool = new pg_1.Pool(dotenv_config_1.dbconnfig);
const db = (text, params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const result = yield client.query(text, params);
        return result;
    }
    finally {
        client.release();
    }
});
exports.db = db;
//for orm support
exports.sequelize = new sequelize_1.Sequelize(dotenv_config_1.dbconnfig.database, dotenv_config_1.dbconnfig.user, dotenv_config_1.dbconnfig.password, {
    host: dotenv_config_1.dbconnfig.host,
    port: dotenv_config_1.dbconnfig.port,
    dialect: "postgres",
    logging: console.log,
});
// const sequelize=new Sequelize(dbconnfig.url, username)
// import mysql from 'mysql2/promise'
// import { dbconnfig } from './dotenv.config'
// const db=mysql.createPool(dbconnfig)
// export default db
