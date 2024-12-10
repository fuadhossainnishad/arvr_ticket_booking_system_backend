"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const userController_1 = require("../controllers/userController");
const userValidation_1 = require("../validation/userValidation");
const userRoute = express_1.default.Router();
userRoute.post("/signup/", (0, validateRequest_1.default)(userValidation_1.UserValiation.createUserSignUpValidationSchema), userController_1.postSingleUserController);
userRoute.post("/signin/", (0, validateRequest_1.default)(userValidation_1.UserValiation.userSignInValidationSchema), userController_1.getSingleUserIdController);
userRoute.get("/", userController_1.getAllUsersController);
userRoute.post("/:userId", userController_1.getSingleUserInfoController);
userRoute.get('/bookings/:userId', userController_1.userbookingController);
exports.default = userRoute;
