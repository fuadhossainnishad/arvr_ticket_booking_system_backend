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
exports.getContactController = exports.postContactController = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const contactsService_1 = require("../services/contactsService");
exports.postContactController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, subject, message } = req.body;
    const contact_id = yield (0, contactsService_1.postContactService)(name, email, subject, message);
    if (!contact_id) {
        return res.status(404).json({ message: "Message not sent" });
    }
    return res.status(200).json({ message: "Message sent to the authority", contact_id });
}));
exports.getContactController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allContacts = yield (0, contactsService_1.getContactsService)();
    if (!allContacts) {
        return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json({ message: "All contacts", allContacts });
}));
