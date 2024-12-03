"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const userValidation_1 = require("../validation/userValidation");
const adminController_1 = require("../controllers/adminController");
const getAdminRoute = express_1.default.Router();
getAdminRoute.post('/signin/admin', (0, validateRequest_1.default)(userValidation_1.UserValiation.userSignInValidationSchema), adminController_1.getAdminIdController);
getAdminRoute.get('/admin/:adminId', adminController_1.getAdminInfoController);
exports.default = getAdminRoute;
