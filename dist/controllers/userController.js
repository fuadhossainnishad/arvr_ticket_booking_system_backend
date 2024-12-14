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
exports.userbookingController = exports.postSingleUserController = exports.getAllUsersController = exports.getSingleUserInfoController = exports.getSingleUserIdController = void 0;
const userServices_1 = require("../services/userServices");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getSingleUserIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(req.body);
    const userId = yield (0, userServices_1.getSingleUserId)(email, password);
    if (!userId) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.status(200).json({ message: "SignIn successful", userId });
}));
exports.getSingleUserInfoController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const userInfo = yield (0, userServices_1.getSingleUserInfo)(userId);
    if (!userInfo) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found", userInfo });
}));
exports.getAllUsersController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, userServices_1.getAllUsers)();
    if (!allUsers) {
        return null;
    }
    return res.status(200).json({ message: "All Users", allUsers });
}));
exports.postSingleUserController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, mobilenumber, password } = req.body;
    console.log(req.body);
    const postUser = yield (0, userServices_1.postSingleUser)({
        fullname,
        email,
        mobilenumber,
        password,
    });
    if (!postUser) {
        return res.status(404).json({ message: "User not registered" });
    }
    return res.status(200).json({ message: "User signedUp successfully" });
    // console.log(postUser)
}));
exports.userbookingController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const userbooking = yield (0, userServices_1.getUserBookings)(user_id);
    if (!userbooking) {
        return res.status(404).json({ message: "User Bookings not found" });
    }
    return res
        .status(200)
        .json({ message: "User Bookings found successfully", userbooking });
}));
