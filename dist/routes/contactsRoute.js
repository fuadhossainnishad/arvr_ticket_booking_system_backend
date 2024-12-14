"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const contactsController_1 = require("../controllers/contactsController");
const contactsValidation_1 = require("../validation/contactsValidation");
const contactRoute = express_1.default.Router();
contactRoute.post("/", (0, validateRequest_1.default)(contactsValidation_1.postContactValidation), contactsController_1.postContactController);
contactRoute.get("/", contactsController_1.getContactController);
exports.default = contactRoute;
