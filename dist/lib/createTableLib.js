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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableLib = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const createTableLib = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Database connected successfully");
        yield dbconfig_1.default.execute(query);
        console.log("Table created successfully");
    }
    catch (error) {
        console.error("Error on creating table:", error);
    }
    finally {
        yield dbconfig_1.default.end();
    }
});
exports.createTableLib = createTableLib;
