import { string, z } from "zod";

export const postBookingValidation = z.object({
  body: z.object({
    userId: z.number({
      invalid_type_error: "userId is invalid",
    }),
    eventId: z.number({
      invalid_type_error: "eventId is invalid",
    }),
    seats: z.number({
      invalid_type_error: "seats must be a number",
    }),
  }),
});

export const getBookingInfoValidation = z.object({
  body: z.object({
    bookingId: z.number({
      invalid_type_error: "bookingId is invalid",
    }),
  }),
});
