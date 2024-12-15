"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
const uploadsDir_1 = require("./filehandle/uploadsDir");
const bookingRoute_1 = __importDefault(require("./routes/bookingRoute"));
const eventsRoute_1 = __importDefault(require("./routes/eventsRoute"));
const contactsRoute_1 = __importDefault(require("./routes/contactsRoute"));
// import { frontendConfig } from "./config/dotenv.config";
dotenv_1.default.config();
const app = (0, express_1.default)();
// {
//   origin:frontendConfig.frontend,
//   methods: '*' ,
//   credentials: true,
// }
app.use((0, cors_1.default)({
    origin: [process.env.FRONTENDURL, process.env.LOCALHOST],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(uploadsDir_1.uploadsDir));
// app.use("/api/events/", getAllEventRoute);
// app.use("/api/", createEventRoute);
app.use("/api/bookings/", bookingRoute_1.default);
app.use("/api/events/", eventsRoute_1.default);
app.use("/api/user/", userRoute_1.default);
app.use("/api/admin/", adminRoute_1.default);
app.use("/api/contacts/", contactsRoute_1.default);
exports.default = app;
