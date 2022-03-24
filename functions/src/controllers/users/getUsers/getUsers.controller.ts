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

const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = [];
    const querySnapshot = await db.collection("users").get();
    querySnapshot.forEach((doc: any) => users.push(doc.data()));
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getUsers;
