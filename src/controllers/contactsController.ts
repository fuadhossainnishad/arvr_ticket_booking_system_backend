import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import {
  getContactsService,
  postContactService,
} from "../services/contactsService";

export const postContactController = catchAsync(
  async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    const contact_id = await postContactService(name, email, subject, message);
    if (!contact_id) {
      return res.status(404).json({ message: "Message not sent" });
    }
    return res
      .status(200)
      .json({ message: "Message sent to the authority", contact_id });
  }
);

export const getContactController = catchAsync(
  async (req: Request, res: Response) => {
    const allContacts = await getContactsService();
    if (!allContacts) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json({ message: "All contacts", allContacts });
  }
);
