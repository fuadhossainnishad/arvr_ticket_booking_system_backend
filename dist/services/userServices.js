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
exports.getUserBookings = exports.postSingleUser = exports.getAllUsers = exports.getSingleUserInfo = exports.getSingleUserId = void 0;
const dbconfig_1 = require("../config/dbconfig");
const userQueries_1 = require("../database/postgresql/queries/userQueries");
// import { User } from "../interface/userInterface";
const bcrypt_1 = __importDefault(require("bcrypt"));
const getSingleUserId = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = yield (0, dbconfig_1.db)(userQueries_1.userQuery.getSingleUserIdQuery, [email]);
    if (!dbresponse.rows[0]) {
        return null;
    }
    const user = dbresponse.rows[0];
    const checkPassword = yield bcrypt_1.default.compare(password, user.hashpassword);
    if (!checkPassword) {
        return null;
    }
    return user.id;
    console.log("getSingleUserInfo", dbresponse.rows);
});
exports.getSingleUserId = getSingleUserId;
const getSingleUserInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = (yield (0, dbconfig_1.db)(userQueries_1.userQuery.getSingleUserInfoQuery, [id]));
    if (!dbresponse.rows) {
        return null;
    }
    return dbresponse.rows;
    console.log("getSingleUserInfo", dbresponse.rows);
});
exports.getSingleUserInfo = getSingleUserInfo;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = (yield (0, dbconfig_1.db)(userQueries_1.userQuery.getAllUserQuery));
    return dbresponse.rows;
});
exports.getAllUsers = getAllUsers;
const postSingleUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, mobilenumber, password } = user;
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    const dbresponse = yield (0, dbconfig_1.db)(userQueries_1.userQuery.insertSingleUserQuery, [
        fullname,
        email,
        mobilenumber,
        hashPassword,
    ]);
    return dbresponse.rows;
    console.log("dbresponse.rows:", dbresponse.rows);
});
exports.postSingleUser = postSingleUser;
const getUserBookings = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = Number(userId);
    console.log(user_id);
    const dbresponse = yield (0, dbconfig_1.db)(userQueries_1.userQuery.userBookingsQuery, [user_id]);
    const userbooking = dbresponse.rows;
    if (!userbooking) {
        return null;
    }
    return userbooking;
    console.log("userbooking:", userbooking);
});
exports.getUserBookings = getUserBookings;
