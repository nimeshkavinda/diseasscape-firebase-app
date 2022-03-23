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

const updatePost = async (req: Request, res: Response) => {
  const {
    body: {
      title,
      description,
      type,
      date,
      images,
      location,
      latLng,
      postedBy,
    },
    params: { id },
  } = req;

  try {
    const post = db.collection("posts").doc(id);

    const currentData = (await post.get()).data() || {};

    const data = {
      title: title || currentData.title,
      description: description || currentData.description,
      type: type || currentData.type,
      date: date || currentData.date,
      images: images || currentData.images,
      location: location || currentData.location,
      latLng: latLng || currentData.latLng,
      postedBy: postedBy || currentData.postedBy,
    };

    await post.set(data);
    return res.status(200).json({
      status: "success",
      message: "post updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updatePost;
