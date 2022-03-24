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

const getPatients = async (req: Request, res: Response) => {
  try {
    const patients: Patient[] = [];
    const querySnapshot = await db.collection("patients").get();
    querySnapshot.forEach((doc: any) => patients.push(doc.data()));
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getPatients;
