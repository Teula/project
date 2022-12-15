import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  // user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  text: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  dislikes: [
    {
      type: String,
    },
  ],
  user: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  course: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  instructor: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" },
  },
  replies: [
    {
      reply: {
        type: String,
      },
    },
  ],
});

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
