import { Response } from "express";
import { db } from "../../../firebase.config";

type User = {
  uid: string;
  fullName: string;
  bio: string;
  status: string;
  disease: string;
  phone: string;
  address: {};
  posts: [];
  events: [];
  going: [];
};

type Request = { body: User; params: { uid: string } };

const createUser = async (req: Request, res: Response) => {
  const {
    uid,
    fullName,
    bio,
    status,
    disease,
    phone,
    address,
    posts,
    events,
    going,
  } = req.body;

  try {
    const post = db.collection("users").doc();
    const data = {
      uid,
      fullName,
      bio,
      status,
      disease,
      phone,
      address,
      posts,
      events,
      going,
    };

    post.set(data);

    res.status(200).send({
      status: "success",
      message: "user created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createUser;
