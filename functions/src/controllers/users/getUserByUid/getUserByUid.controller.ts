import { Response } from "express";
import { db } from "../../../firebase.config";

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

const getUserByUid = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const user: User[] = [];
    await db
      .collection("users")
      .doc(uid)
      .get()
      .then((doc: any) => user.push(doc.data()));
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getUserByUid;
