import dbConnect from "../../../../../../utils/dbConnect";
import User from "../../../../../../models/User";
import { Comment } from "../../../../../../models/Comment";
import { Course } from "../../../../../../models/Course";

export default async function handler(req, res) {
  const { method, query } = req;
  dbConnect();
  if (method == "POST") {
    const user = await User.findById(req.body.session.user._id);
    const newComment = await Comment.create({
      user: user,
      text: req.body.comment,
      course: query.courseId,
    });
    console.log("ttest", user);
    await newComment.save();
  }
  if (method == "DELETE") {
    await Course.findByIdAndRemove(req.body._id);
  }
  // console.log("uyes");
  //   const user = await User.find();
  //   const dataFromU = req.body;
  res.status(200).json({ query });
}
