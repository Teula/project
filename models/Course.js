const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;
import { Instructor } from "./Instructor";
import { Comment } from "./Comment";

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }],

  //reviews
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  majors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Major" }],
});

export const Course =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);
