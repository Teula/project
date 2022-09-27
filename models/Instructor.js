import mongoose from "mongoose";
import { Course } from "./Course";
import { Comment } from "./Comment";

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],

  //reviews
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  // might need to import
});

export const Instructor =
  mongoose.models.Instructor || mongoose.model("Instructor", InstructorSchema);
