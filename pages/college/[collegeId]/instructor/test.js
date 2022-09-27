import { College } from "../../../../models/College";
import dbConnect from "../../../../utils/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const { method } = req;
  const { query } = req;
  console.log(query);
  switch (method) {
    case "GET":
      const college = await College.findById(query.id);
      res.status(200).json({ college });
      break;

    default:
      break;
  }
}
