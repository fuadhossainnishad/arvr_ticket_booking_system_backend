"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingInfoValidation = exports.postBookingValidation = void 0;
const zod_1 = require("zod");
exports.postBookingValidation = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z
            .string({
            invalid_type_error: "userId is invalid",
        })
            .regex(/^[0-9]+$/, "userId must be a number"),
        eventId: zod_1.z
            .string({
            invalid_type_error: "eventId is invalid",
        })
            .regex(/^[0-9]+$/, "eventId must be a number"),
        seats: zod_1.z.number({
            invalid_type_error: "seats must be a number",
        }),
    }),
});
exports.getBookingInfoValidation = zod_1.z.object({
    body: zod_1.z.object({
        bookingId: zod_1.z
            .string({
            invalid_type_error: "bookingId is invalid",
        })
            .regex(/^[0-9]+$/, "bookingId must be a number"),
    }),
});
