import { Response } from "express";
import { db } from "../../../firebase.config";

type Patient = {
  uid: string;
  date: string;
  status: string;
  disease: string;
  location: {};
  latLng: {};
};

type Request = { body: Patient; params: { uid: string } };

const createPatient = async (req: Request, res: Response) => {
  const {
    body: { date, status, disease, location, latLng },
    params: { uid },
  } = req;

  try {
    const patient = db.collection("patients").doc(uid);

    const currentData = (await patient.get()).data() || {};

    const data = {
      uid: uid || currentData.uid,
      date: date,
      status: status,
      disease: disease,
      location: location,
      latLng: latLng,
    };

    await patient.set(data);
    return res.status(200).json({
      status: "success",
      message: "patient created/ updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default createPatient;
