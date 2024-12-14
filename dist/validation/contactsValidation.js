"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContactValidation = void 0;
const zod_1 = require("zod");
exports.postContactValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        email: zod_1.z
            .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be valid email address",
        })
            .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/, "Invalid Email Address"),
        subject: zod_1.z.string({
            required_error: "Subject is required",
        }),
        message: zod_1.z.string({
            required_error: "Attach a message",
        }),
    }),
});
