// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../../utils/dbConnect";
import { Comment } from "../../../../models/Comment";
import { User } from "../../../../models/User";
export default async function handler(req, res) {
  const { method, body } = req;
  dbConnect();
  if (method == "GET") {
    dbConnect();
    const comments = await Comment.find({ course: req.query.course }).populate(
      "user"
    );
    // .populate("majors");
    // .populate([
    //   {
    //     path: "user",
    //     populate: { path: "user", model: "User" },
    //   },
    // ]);
    // .populate("prerequisites")
    // .populate("majors");
    console.log("test comments...", comments);
    res.status(200).json({ comments });
  }
}
