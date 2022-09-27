// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Course } from "../../models/Course";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const courseDB = await Course.find();
  const dataFromU = req.body;
  res.status(200).json({ courses: courseDB });
}
