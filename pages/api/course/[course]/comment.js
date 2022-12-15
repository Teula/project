// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../../utils/dbConnect";
import { Comment } from "../../../../models/Comment";
export default async function handler(req, res) {
  const { method, body } = req;
  dbConnect();
  if (method == "GET") {
    dbConnect();
    const comments = await Comment.find({ course: req.query.course });
    console.log("test comments...", comments);
    res.status(200).json({ comments });
  }
}
