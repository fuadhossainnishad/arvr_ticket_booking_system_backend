import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import path from "path";
import { createEventRoute } from "./routes/createEventRoute";
import getEventRoute from "./routes/getEventRoute";
import getAllEventRoute from "./routes/getAllEventRoute";
import userRoute from "./routes/userRoute";
import adminRoute from "./routes/adminRoute";
import { uploadsDir } from "./filehandle/uploadsDir";
import bookingRoute from "./routes/bookingRoute";
import eventRoute from "./routes/eventsRoute";
// import { frontendConfig } from "./config/dotenv.config";

dotenv.config();

const app = express();

// {
//   origin:frontendConfig.frontend,
//   methods: '*' ,
//   credentials: true,
// }

app.use(cors());
app.use(express.json()); // Use built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsDir));

// app.use("/api/events/", getAllEventRoute);
// app.use("/api/", createEventRoute);

app.use("/api/events/", eventRoute);
app.use("/api/user/", userRoute);
app.use("/api/admin/", adminRoute);
app.use("/api/bookings/", bookingRoute);

export default app;
