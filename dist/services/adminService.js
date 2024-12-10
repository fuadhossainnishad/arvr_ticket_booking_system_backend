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
exports.adminDashboardInfo = exports.getAdminInfo = exports.getAdminId = void 0;
const dbconfig_1 = require("../config/dbconfig");
// import {admin } from "../interface/adminInterface";
const adminQueries_1 = require("../database/postgresql/queries/adminQueries");
const getAdminId = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPassword = await bcrypt.hash(password, 10);
    const adminId = (yield (0, dbconfig_1.db)(adminQueries_1.getAdminIdQuery, [email]));
    if (!adminId.rows[0]) {
        throw new Error("Invalid email or password.");
    }
    return adminId.rows[0];
    console.log("getAdminId", adminId.rows);
});
exports.getAdminId = getAdminId;
const getAdminInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminInfo = (yield (0, dbconfig_1.db)(adminQueries_1.getAdminInfoQuery, [id]));
    if (!adminInfo.rows[0]) {
        throw new Error("Admin not found.");
    }
    return adminInfo.rows[0];
    console.log("getAdminInfo", adminInfo.rows);
});
exports.getAdminInfo = getAdminInfo;
const adminDashboardInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbresponse = yield (0, dbconfig_1.db)(adminQueries_1.adminDashboardQuery);
    const dashboard = dbresponse.rows;
    if (!dashboard) {
        return null;
    }
    return dashboard;
});
exports.adminDashboardInfo = adminDashboardInfo;
