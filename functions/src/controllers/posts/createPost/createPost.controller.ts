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

const createPost = async (req: Request, res: Response) => {
  const { title, description, type, date, images, location, latLng, postedBy } =
    req.body;

  try {
    const post = db.collection("posts").doc();
    const data = {
      id: post.id,
      title,
      description,
      type,
      date,
      images,
      location,
      latLng,
      postedBy,
    };

    post.set(data);

    res.status(200).send({
      status: "success",
      message: "posted created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createPost;
