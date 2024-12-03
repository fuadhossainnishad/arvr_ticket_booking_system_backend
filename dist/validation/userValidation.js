"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValiation = void 0;
const zod_1 = require("zod");
const createUserSignUpValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({
            invalid_type_error: "Full Name must be string",
        }),
        email: zod_1.z
            .string({
            invalid_type_error: "Email must be valid email address",
        })
            .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Address"),
        mobileNumber: zod_1.z
            .string({
            invalid_type_error: "Mobile Number must be valid number",
        })
            .regex(/^\+[1-9]\d{11}$/, "Invalid Mobile Number"),
        password: zod_1.z
            .string({
            invalid_type_error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        })
            .min(8, "Password must be at least 8 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    }),
});
const userSignInValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        invalid_type_error: "Email must be valid email address",
    })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Address"),
    body: zod_1.z.object({
        password: zod_1.z
            .string({
            invalid_type_error: "Inavlid Password!",
        })
            .min(8, "Password must be at least 8 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    }),
});
exports.UserValiation = {
    createUserSignUpValidationSchema,
    userSignInValidationSchema,
};
