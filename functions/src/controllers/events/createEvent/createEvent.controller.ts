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

const createEvent = async (req: Request, res: Response) => {
  const {
    title,
    description,
    date,
    time,
    location,
    latLng,
    organizer,
    participants,
  } = req.body;

  try {
    const post = db.collection("events").doc();
    const data = {
      id: post.id,
      title,
      description,
      date,
      time,
      location,
      latLng,
      organizer,
      participants,
    };

    post.set(data);

    res.status(200).send({
      status: "success",
      message: "event created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createEvent;
