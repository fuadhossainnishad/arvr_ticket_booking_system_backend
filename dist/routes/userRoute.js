"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const userController_1 = require("../controllers/userController");
const userValidation_1 = require("../validation/userValidation");
const getUserRoute = express_1.default.Router();
getUserRoute.post("/signup/user", (0, validateRequest_1.default)(userValidation_1.UserValiation.createUserSignUpValidationSchema), userController_1.postSingleUserController);
getUserRoute.post("/signin/user", (0, validateRequest_1.default)(userValidation_1.UserValiation.userSignInValidationSchema), userController_1.getSingleUserIdController);
getUserRoute.get("/user", userController_1.getAllUsersController);
getUserRoute.get("/user/:{userId}", userController_1.getSingleUserIdController);
exports.default = getUserRoute;
