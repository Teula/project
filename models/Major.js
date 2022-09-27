const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;
// import { Instructor } from "./Instructor";
// import { Comment } from "./Comment";

const MajorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  tag: {
    type: String,
  },
  // courses: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Course",
  //   },
  // ],
  //   instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }],

  //   //reviews
  //   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export const Major =
  mongoose.models.Major || mongoose.model("Major", MajorSchema);
