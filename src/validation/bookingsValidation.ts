import { string, z } from "zod";

export const postBookingValidation = z.object({
  body: z.object({
    userId: z
      .string({
        invalid_type_error: "userId is invalid",
      })
      .regex(/^[0-9]+$/, "userId must be a number"),
    eventId: z
      .string({
        invalid_type_error: "eventId is invalid",
      })
      .regex(/^[0-9]+$/, "eventId must be a number"),
    seats: z.number({
      invalid_type_error: "seats must be a number",
    }),
  }),
});

export const getBookingInfoValidation = z.object({
  body: z.object({
    bookingId: z
      .string({
        invalid_type_error: "bookingId is invalid",
      })
      .regex(/^[0-9]+$/, "bookingId must be a number"),
  }),
});
