import dbConnect from "../../../../../../utils/dbConnect";
import User from "../../../../../../models/User";
import { Comment } from "../../../../../../models/Comment";
import { Course } from "../../../../../../models/Course";
import { Instructor } from "../../../../../../models/Instructor";

export default async function handler(req, res) {
  const { method, query } = req;
  dbConnect();
  if (method == "GET") {
    const course = await Instructor.findById(query.instructorId).populate([
      "courses",
    ]);

    res.status(200).json({ course });
  }
  if (method == "POST") {
    console.log("newComment", query.courseId);
    const user = await User.findById(req.body.session.user._id);
    const course = await Course.findById(query.courseId);
    const instructor = await Instructor.findById(req.body.getIns);
    console.log(query.courseId);

    const newComment = await Comment.create({
      user: user,
      text: req.body.comment,
      // course: query.courseId,
      course: course,
      rateP: req.body.ratePro,
      diffP: req.body.diffPro,
      again: req.body.takeAgain,
      diffC: req.body.courseDiff,
      grade: req.body.grade,
      hide: req.body.hide,
      instructor: instructor,
    });

    await user.comments.push(newComment);
    await instructor.comments.push(newComment);
    await course.comments.push(newComment);
    await course.instructors.push(instructor);
    await course.save();
    await user.save();
    await instructor.save();
    await newComment.save();
  }
  if (method == "DELETE") {
    await Instructor.findByIdAndRemove(req.body._id);

    res.status(201).json({ query });
  }
  // console.log("uyes");
  //   const user = await User.find();
  //   const dataFromU = req.body;
  res.status(200).json({ query });
}
