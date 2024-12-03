import { Request, Response } from "express";
import {db} from "../config/dbconfig";
import { RowDataPacket } from "mysql2";
import { Event } from "../interface/eventInterface";
import { getSingleEventQuery } from "../database/postgresql/queries/eventsQueries";

const getEventController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result= await db(getSingleEventQuery, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event not found." });
    }

    const event: Event = result.rows[0] as Event;
    const fileBaseURL = `${req.protocol}://${req.get("host")}`; // Base URL for uploaded files
    event.coverPhoto = event.coverPhoto ? `${fileBaseURL}/${event.coverPhoto}`:"";

    res.json(event);
    console.log(event);
    
  } catch (error) {
    console.log("Error fetching event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getEventController;
