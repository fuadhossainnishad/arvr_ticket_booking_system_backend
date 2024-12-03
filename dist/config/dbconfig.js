"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_config_1 = require("./dotenv.config");
const db = promise_1.default.createPool(dotenv_config_1.dbconnfig);
exports.default = db;
