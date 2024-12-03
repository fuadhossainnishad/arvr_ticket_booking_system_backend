import { Request, Response } from "express";
import db from "../config/dbconfig";
import { Event } from "../interface/eventInterface";
export const getAllEventsController = async (req: Request, res: Response) => {
  const allEventquery = `SELECT * FROM events`;
  try {
    const [allEventsResponse] = await db.query<Event[]>(allEventquery);
    if (!allEventsResponse) {
      return res.status(404).json({ message: "No events found." });
    }
    res.status(200).json(allEventsResponse);
    console.log("All events:", allEventsResponse);
  } catch (error) {
    res.status(500).send("Server error for query all events");
    console.log("All event:", error);
  }
};
