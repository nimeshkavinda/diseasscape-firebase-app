import { Response } from "express";
import { admin, db } from "../../../firebase.config";

type User = {
  uid: string;
  fullName: string;
  profilePhoto: string;
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
    profilePhoto,
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
    const user = db.collection("users").doc(uid);
    const data = {
      uid,
      fullName,
      profilePhoto,
      bio,
      status,
      disease,
      phone,
      address,
      posts,
      events,
      going,
      created: admin.firestore.FieldValue.serverTimestamp(),
    };

    user.set(data);

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
