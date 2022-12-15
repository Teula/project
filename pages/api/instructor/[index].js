// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../utils/dbConnect";
import { Instructor } from "../../../models/Instructor";

export default async function handler(req, res) {
  dbConnect();
  const { method, body, query } = req;
  switch (method) {
    case "POST":
      console.log("path", query.index);
      const instructor = await Instructor.create({
        name: body.instructor,
        college: query.index,
      });
      await instructor.save();
      res.status(200).json({ instructor });

      break;
    case "GET":
      res.status(200).json(query.index);
      break;
    default:
      break;
  }
  res.status(200).json(query.index);
}
