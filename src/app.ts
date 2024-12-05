import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import path from "path";
import { createEventRoute } from "./routes/createEventRoute";
import getEventRoute from "./routes/getEventRoute";
import getAllEventRoute from "./routes/getAllEventRoute";
import getUserRoute from "./routes/userRoute";
import getAdminRoute from "./routes/adminRoute";
import { uploadsDir } from "./filehandle/uploadsDir";
import { frontendConfig } from "./config/dotenv.config";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// {
//   origin:frontendConfig.frontend,
//   methods: '*' ,
//   credentials: true,
// }
// Middleware
app.use(cors());
app.use(express.json()); // Use built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsDir));

// Routes
app.use("/api/", getAllEventRoute);
app.use("/api/", createEventRoute);
app.use("/api/", getEventRoute);
app.use("/api/", getUserRoute);
app.use("/api/", getAdminRoute);

// Export app
export default app;
