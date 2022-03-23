import { Response } from "express";
import { db } from "../../../firebase.config";

type Post = {
  title: string;
  description: string;
  type: string;
  date: string;
  images: [];
  location: {};
  latLng: {};
  postedBy: {};
};

type Request = { body: Post; params: { id: string } };

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts: Post[] = [];
    const querySnapshot = await db.collection("posts").get();
    querySnapshot.forEach((doc: any) => posts.push(doc.data()));
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getPosts;
