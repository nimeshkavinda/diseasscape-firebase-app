import { Response } from "express";
import { db } from "../../../firebase.config";

type Event = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: {};
  latLng: {};
  organizer: {};
  participants: {};
};

type Request = { body: Event; params: { id: string } };

const updateEvent = async (req: Request, res: Response) => {
  const {
    body: {
      title,
      description,
      date,
      time,
      location,
      latLng,
      organizer,
      participants,
    },
    params: { id },
  } = req;

  try {
    const event = db.collection("events").doc(id);

    const currentData = (await event.get()).data() || {};

    const data = {
      id: currentData.id,
      title: title || currentData.title,
      description: description || currentData.description,
      date: date || currentData.date,
      time: time || currentData.time,
      location: location || currentData.location,
      latLng: latLng || currentData.latLng,
      organizer: organizer || currentData.organizer,
      participants: participants || currentData.participants,
    };

    await event.set(data);
    return res.status(200).json({
      status: "success",
      message: "event updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateEvent;
