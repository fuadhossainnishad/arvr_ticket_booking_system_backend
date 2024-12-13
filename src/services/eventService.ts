import { db } from "../config/dbconfig";
import { allEventQuery } from "../database/postgresql/queries/eventsQueries";
import {
  deleteSingleEventQuery,
  getSingleEventQuery,
  insertEventQuery,
  updateSingleEventQuery,
} from "../database/query/event";

export const getAllEvents = async () => {
  const response = await db(allEventQuery);
  const allEventsResponse = response.rows;
  console.log("allEventsResponse", response.rows);
  if (!allEventsResponse) {
    return null;
  }
  return allEventsResponse;
};

export const getSingleEvent = async (event_id: string) => {
  const id = Number(event_id);
  console.log(id);
  const response = await db(getSingleEventQuery, [id]);
  const singleEventResponse = response.rows[0];
  console.log("singleEventResponse", response.rows);
  if (!singleEventResponse) {
    return null;
  }
  return singleEventResponse;
};

export const postCreateEvent = async (
  title: string,
  description: string,
  totalSeats: number,
  ticketPrice: number,
  eventDate: any,
  coverPhoto: string
) => {
  const result = await db(insertEventQuery, [
    title,
    description,
    totalSeats,
    ticketPrice,
    eventDate,
    coverPhoto,
  ]);
  const eventId = result.rows[0].id;
  console.log("postCreateEvent", result.rows);
  if (!eventId) {
    return null;
  }
  return eventId;
};

export const updateEvent = async (
  eventId: string,
  title: string,
  description: string,
  totalSeats: string,
  ticketPrice: string,
  eventDate: string,
  coverPhoto: string
) => {
  const id = Number(eventId);
  console.log(id);
  const response = await db(updateSingleEventQuery, [
    title,
    description,
    Number(totalSeats),
    Number(ticketPrice),
    eventDate,
    coverPhoto,
    id,
  ]);

  console.log("updateEvent", response.rows);
  if (!response.rowCount) {
    return null;
  }
  return true;
};

export const deleteSingleEvent = async (eventId: string) => {
  const id = Number(eventId);
  console.log(id);
  const response = await db(deleteSingleEventQuery, [id]);
  console.log("deleteSingleEvent", response.rows);
  if (!response.rowCount) {
    return null;
  }
  return true;
};
