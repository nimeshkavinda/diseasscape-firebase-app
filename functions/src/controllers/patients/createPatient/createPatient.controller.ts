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
  const { uid, date, status, disease, location, latLng } = req.body;

  try {
    const patient = db.collection("patients").doc(uid);
    const data = {
      uid,
      date,
      status,
      disease,
      location,
      latLng,
    };

    patient.set(data);

    res.status(200).send({
      status: "success",
      message: "patient created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createPatient;
