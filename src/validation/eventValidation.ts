import { z } from "zod";

export const createEventValidationSchema = z.object({
  title: z.string().min(1, "Title is required.").max(20, "Maximum 20 words"),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(150, "Maximum 150 words"),
  totalSeats: z
    .number()
    .int("Total seats must be an integer.")
    .positive("Total seats must be greater than zero."),
  ticketPrice: z.number().positive("Ticket price must be a positive number."),
  eventDate: z.date({ required_error: "Event date is required." }),
  coverPhoto: z.string().url("Cover photo must be a valid URL."),
});

export const getEventByIdValidationSchema = z.object({
  body: z.object({
    eventId: z
      .string()
      .max(1, "Invalid Event Id")
      .min(1, "Event id is required"),
  }),
});

// export const deleteEventValidationSchema=z.object({
//   body:z.object({
    
//   })
// })

export const updateEventValidationSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(20, "Maximum 20 words")
    .optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(150, "Maximum 150 words")
    .optional(),
  totalSeats: z
    .number()
    .int("Total seats must be an integer.")
    .positive("Total seats must be greater than zero.")
    .optional(),
  ticketPrice: z
    .number()
    .positive("Ticket price must be a positive number.")
    .optional(),
  eventDate: z
  .date({ required_error: "Event date is required." })
  .optional(),
  coverPhoto: z
  .string()
  .url("Cover photo must be a valid URL.")
  .optional(),
});
