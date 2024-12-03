import { z } from "zod";

const createUserSignUpValidationSchema = z.object({
  body: z.object({
    fullName: z.string({
      invalid_type_error: "Full Name must be string",
    }),
    email: z
      .string({
        invalid_type_error: "Email must be valid email address",
      })
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Address"
      ),
    mobileNumber: z
      .string({
        invalid_type_error: "Mobile Number must be valid number",
      })
      .regex(/^\+[1-9]\d{11}$/, "Invalid Mobile Number"),
    password: z
      .string({
        invalid_type_error:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      })
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  }),
});

const userSignInValidationSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be valid email address",
    })
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid Email Address"
    ),
  body: z.object({
    password: z
      .string({
        invalid_type_error:
          "Inavlid Password!",
      })
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  }),
});

export const UserValiation = {
  createUserSignUpValidationSchema,
  userSignInValidationSchema,
};
