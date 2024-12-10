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
exports.getAdminDashboardController = exports.getAdminInfoController = exports.getAdminIdController = void 0;
const adminService_1 = require("../services/adminService");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getAdminIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const adminPassword = (0, adminService_1.getAdminId)(email);
    if (!adminPassword) {
        return res.status(404).json({ message: "Admin not found" });
    }
    else if (adminPassword === password) {
        return res.status(200).json({ message: "Admin SignIn Successfully" });
    }
    else {
        return res.status(404).json({ message: "Admin not found" });
    }
}));
exports.getAdminInfoController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { adminId } = req.params;
    const adminInfo = (0, adminService_1.getAdminInfo)(adminId);
    if (!adminInfo) {
        res.status(404).json({ message: "Admin not found" });
    }
    return res
        .status(200)
        .json({ message: "Admin found successfully", adminInfo });
}));
exports.getAdminDashboardController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admindashboard = yield (0, adminService_1.adminDashboardInfo)();
    if (!admindashboard) {
        res.status(404).json({ message: "Admin Dashboard not found" });
    }
    return res.status(200).json({ message: "Admin Dashboard", admindashboard });
    console.log(admindashboard);
}));
