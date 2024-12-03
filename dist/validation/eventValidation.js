"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventValidationSchema = exports.getEventByIdValidationSchema = exports.createEventValidationSchema = void 0;
const zod_1 = require("zod");
exports.createEventValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required.").max(20, "Maximum 20 words"),
    description: zod_1.z
        .string()
        .min(1, "Description is required.")
        .max(150, "Maximum 150 words"),
    totalSeats: zod_1.z
        .number()
        .int("Total seats must be an integer.")
        .positive("Total seats must be greater than zero."),
    ticketPrice: zod_1.z.number().positive("Ticket price must be a positive number."),
    eventDate: zod_1.z.date({ required_error: "Event date is required." }),
    coverPhoto: zod_1.z.string().url("Cover photo must be a valid URL."),
});
exports.getEventByIdValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        eventId: zod_1.z
            .string()
            .max(1, "Invalid Event Id")
            .min(1, "Event id is required"),
    }),
});
exports.deleteEventValidationSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, "Title is required.")
        .max(20, "Maximum 20 words")
        .optional(),
    description: zod_1.z
        .string()
        .min(1, "Description is required.")
        .max(150, "Maximum 150 words")
        .optional(),
    totalSeats: zod_1.z
        .number()
        .int("Total seats must be an integer.")
        .positive("Total seats must be greater than zero.")
        .optional(),
    ticketPrice: zod_1.z
        .number()
        .positive("Ticket price must be a positive number.")
        .optional(),
    eventDate: zod_1.z
        .date({ required_error: "Event date is required." })
        .optional(),
    coverPhoto: zod_1.z
        .string()
        .url("Cover photo must be a valid URL.")
        .optional(),
});
