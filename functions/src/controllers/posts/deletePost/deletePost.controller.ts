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

const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const post = db.collection("posts").doc(id);
    await post.delete();
    return res
      .status(200)
      .json({ status: "success", message: "post deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default deletePost;
