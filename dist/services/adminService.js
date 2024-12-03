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
exports.getAdminInfo = exports.getAdminId = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const adminQuery_1 = require("../database/query/adminQuery");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAdminId = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    const [adminId] = yield dbconfig_1.default.query(adminQuery_1.getAdminIdQuery, [
        email,
        hashPassword,
    ]);
    if (!adminId) {
        throw new Error("Invalid email or password.");
    }
    return adminId;
});
exports.getAdminId = getAdminId;
const getAdminInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [adminInfo] = yield dbconfig_1.default.query(adminQuery_1.getAdminInfoQuery, [id]);
    if (!adminInfo) {
        throw new Error("Admin not found.");
    }
    return adminInfo;
});
exports.getAdminInfo = getAdminInfo;
