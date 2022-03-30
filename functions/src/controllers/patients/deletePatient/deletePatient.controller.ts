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

const deletePatient = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const patient = db.collection("patients").doc(uid);
    await patient.delete();
    return res
      .status(200)
      .json({ status: "success", message: "patient deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default deletePatient;
