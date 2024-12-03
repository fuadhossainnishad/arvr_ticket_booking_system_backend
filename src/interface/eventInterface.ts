import { RowDataPacket } from "mysql2";

export interface Event extends RowDataPacket {
  id: string;
  title: string;
  description: string;
  totalSeats: number;
  ticketPrice: number;
  eventDate:  Date;
  coverPhoto: string;
  createdAt: Date;
  updatedAt: Date;
}
