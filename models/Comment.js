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
  likes: {
    type: Number,
  },
  dislikes: {
    type: Number,
  },
  replies: [
    {
      reply: {
        type: String,
      },
      // user: {
      // type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      // },
    },
  ],
});

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
