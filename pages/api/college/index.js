import { College } from "../../../models/College";
import dbConnect from "../../../utils/dbConnect";
import { Major } from "../../../models/Major";

export default async function handler(req, res) {
  dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      const colleges = await College.find().populate("majors");
      console.log(colleges);
      res.status(200).json({ colleges });
      break;

    default:
      break;
  }
}
