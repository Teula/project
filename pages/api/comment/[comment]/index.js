// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../../utils/dbConnect";
import { Comment } from "../../../../models/Comment";
import { ratingClasses } from "@mui/material";
import { User } from "../../../../models/User";

export default async function handler(req, res) {
  const { method, body, query } = req;
  dbConnect();
  let comment;
  switch (
    method // get like dislike
  ) {
    case "GET":
      comment = await Comment.findById(query.comment);
      res.status(200).json({ comment });
      break;
    case "POST":
      comment = await Comment.findById(query.comment);
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
      res.status(201).json({ comment });
      break;
    case "PUT":
      console.log("comment", query.comment);
      console.log("edit", body.newComment);
      await Comment.findByIdAndUpdate(query.comment, { text: body.newComment });

      break;

    case "DELETE":
      console.log("deleing");
      // await Comment.findOneAndDelete(query.comment, function (err, docs) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log("Deleted User : ", docs);
      //   }
      // // });
      // await Comment.find({ _id: query.comment }).remove(callback);

      await Comment.findById(query.comment).deleteOne();
      break;
    // res.status(201).json({ comment });
  }

  comment = await Comment.findById();

  console.log(comment);
  res.status(200).json({ comment });
}
