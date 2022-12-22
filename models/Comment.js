import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    // user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    text: {
      type: String,
    },

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
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }],
    },
    rateP: {
      type: Number,
    },
    diffP: {
      type: Number,
    },
    again: {
      type: String,
    },
    diffC: {
      type: Number,
    },
    grade: {
      type: Number,
    },
    hide: {
      type: String,
    },
    flaged: { type: Boolean },

    replies: [
      {
        reply: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
