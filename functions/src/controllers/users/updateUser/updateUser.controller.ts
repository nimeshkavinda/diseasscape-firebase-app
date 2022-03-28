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

const updateUser = async (req: Request, res: Response) => {
  const {
    body: {
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
    },
    params: { uid },
  } = req;

  try {
    const user = db.collection("users").doc(uid);

    const currentData = (await user.get()).data() || {};

    const data = {
      fullName: fullName || currentData.fullName,
      profilePhoto: profilePhoto || currentData.profilePhoto,
      bio: bio || currentData.bio,
      status: status || currentData.status,
      disease: disease || currentData.disease,
      phone: phone || currentData.phone,
      address: address || currentData.address,
      posts: posts || currentData.posts,
      events: events || currentData.events,
      going: going || currentData.going,
    };

    await user.set(data);
    return res.status(200).json({
      status: "success",
      message: "user updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateUser;
