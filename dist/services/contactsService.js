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
exports.getContactsService = exports.postContactService = void 0;
const dbconfig_1 = require("../config/dbconfig");
const contactsQueries_1 = require("../database/postgresql/queries/contactsQueries");
const postContactService = (name, email, subject, message) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, dbconfig_1.db)(contactsQueries_1.insertContactsQuery, [name, email, subject, message]);
    if (!response) {
        return null;
    }
    const contact_id = response.rows[0].contact_id;
    return contact_id;
});
exports.postContactService = postContactService;
const getContactsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, dbconfig_1.db)(contactsQueries_1.getAllContactsQuery);
    if (!response) {
        return null;
    }
    const contacts = response.rows;
    return contacts;
});
exports.getContactsService = getContactsService;
