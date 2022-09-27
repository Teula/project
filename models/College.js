const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const CollegeShchema = new mongoose.Schema({
  name: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],

  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  majors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Major",
    },
  ],
});

export const College =
  mongoose.models.College || mongoose.model("College", CollegeShchema);

// export default mongoose.models?.College ||
//   mongoose.model("College", CollegeShchema);

// module.exports.College || mongoose.model("College", CollegeShchema);
