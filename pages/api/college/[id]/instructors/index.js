import dbConnect from "../../../../../utils/dbConnect";

import { College } from "../../../../../models/College";
import { Instructor } from "../../../../../models/Instructor";

export default async function (req, res) {
  dbConnect();
  const { method, query } = req;
  switch (method) {
    case "GET":
      const instructors = await Instructor.find({ college: query.id });
      res.status(200).json({ instructors });
      console.log("backend ins", instructors);
      break;

    default:
      break;
  }
  res.status(200).json();
  const college = await College.findById(query.id);
}
