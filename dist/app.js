"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const createEventRoute_1 = require("./routes/createEventRoute");
const getEventRoute_1 = __importDefault(require("./routes/getEventRoute"));
const getAllEventRoute_1 = __importDefault(require("./routes/getAllEventRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
const uploadsDir_1 = require("./filehandle/uploadsDir");
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({ origin: 'https://arvr-ticket-booking-system.vercel.app/' }));
app.use(express_1.default.json()); // Use built-in Express middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(uploadsDir_1.uploadsDir));
// Routes
app.use("/api/", getAllEventRoute_1.default);
app.use("/api/", createEventRoute_1.createEventRoute);
app.use("/api/", getEventRoute_1.default);
app.use("/api/", userRoute_1.default);
app.use("/api/", adminRoute_1.default);
// Export app
exports.default = app;
