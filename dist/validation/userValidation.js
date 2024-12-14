"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValiation = void 0;
const zod_1 = require("zod");
const createUserSignUpValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullname: zod_1.z.string({
            required_error: "Full Name is required",
            invalid_type_error: "Full Name must be string",
        }),
        email: zod_1.z
            .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be valid email address",
        })
            .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/, "Invalid Email Address"),
        mobilenumber: zod_1.z
            .string({
            required_error: "Mobile Number is required",
            invalid_type_error: "Mobile Number must be valid number",
        })
            .regex(/^01\d{9}$/, "Invalid Mobile Number"),
        password: zod_1.z
            .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        })
            .min(8, "Password must be at least 8 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    }),
});
const userSignInValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be valid email address",
        })
            .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/, "Invalid Email Address"),
        password: zod_1.z
            .string({
            required_error: "Password is required",
            invalid_type_error: "Inavlid Password!",
        })
            .min(8, "Password must be at least 8 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    }),
});
exports.UserValiation = {
    createUserSignUpValidationSchema,
    userSignInValidationSchema,
};
