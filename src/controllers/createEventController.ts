import { Request, Response } from "express";
import {db} from "../config/dbconfig";
// import { ResultSetHeader } from "mysql2";
import { fileName } from "../filehandle/fileName";
import { insertEventQuery } from "../database/postgresql/queries/eventsQueries";

const createEventController = async (req: Request, res: Response) => {
  const { title, description, totalSeats, ticketPrice, eventDate } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Cover photo is required" });
  }

  const coverPhoto = await fileName(req);

  try {
    const result= await db(insertEventQuery, [
      title,
      description,
      totalSeats,
      ticketPrice,
      eventDate,
      coverPhoto,
    ]);

    res.status(200).json({
      status: "success",
      message: "Event created successfully",
      eventId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default createEventController;
