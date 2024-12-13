import { z } from "zod";

export const postContactValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be valid email address",
      })
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/,
        "Invalid Email Address"
      ),
    subject: z.string({
      required_error: "Subject is required",
    }),
    message: z.string({
      required_error: "Attach a message",
    }),
  }),
});
