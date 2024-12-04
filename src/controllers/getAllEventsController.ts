import { Request, Response } from "express";
import {db} from "../config/dbconfig";
import { Event } from "../interface/eventInterface";
import { allEventQuery } from "../database/postgresql/queries/eventsQueries";
import { Events } from "pg";
export const getAllEventsController = async (req: Request, res: Response) => {
  try {
    const results = (await db(allEventQuery))!;
    const allEventsResponse: Event[] = results.rows;
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
