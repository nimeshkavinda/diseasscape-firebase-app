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

const getEvents = async (req: Request, res: Response) => {
  try {
    const events: Event[] = [];
    const querySnapshot = await db.collection("events").get();
    querySnapshot.forEach((doc: any) => events.push(doc.data()));
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getEvents;
