// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../../utils/dbConnect";
import { Comment } from "../../../../models/Comment";
import { ratingClasses } from "@mui/material";
import { User } from "../../../../models/User";

export default async function handler(req, res) {
  const { method, body, query } = req;
  dbConnect();
  switch (
    method // get like dislike
  ) {
    case "GET":
      const comment = await Comment.findById(query.comment);
      res.status(200).json({ comment });
    case "POST": {
      const comment = await Comment.findById(query.comment);
      console.log("r", body);
      if (body.like == 1) {
        comment.likes.push(body.Uid);
        comment.dislikes.pull(body.Uid);
      }
      if (body.dislike == 1) {
        comment.dislikes.push(body.Uid);
        comment.likes.pull(body.Uid);
      }
      comment.save();
    }
  }
  const comment = await Comment.findById();

  console.log(comment);
  res.status(200).json({ comment });
}
