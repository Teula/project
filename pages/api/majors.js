// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnect";
import { Major } from "../../models/Major";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method == "GET") {
    const majors = await Major.find();
    res.status(200).json({ majors });
  }
}
