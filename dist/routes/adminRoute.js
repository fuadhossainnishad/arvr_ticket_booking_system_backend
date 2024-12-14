"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const adminRoute = express_1.default.Router();
// getAdminRoute.post('/signin/admin',validateRequest(UserValiation.userSignInValidationSchema),getAdminIdController)
adminRoute.post("/signin", adminController_1.getAdminIdController);
adminRoute.get("/dashboard", adminController_1.getAdminDashboardController);
adminRoute.get("/:adminId", adminController_1.getAdminInfoController);
exports.default = adminRoute;
