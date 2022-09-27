const mongoose = require("mongoose");
import { College } from "../../../../../models/College";
import { Course } from "../../../../../models/Course";

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://teula:201702128@cluster0.tszct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  console.log("connected");
};

export default async function notes(req, res) {
  connectDB();
  //   const somthing = await Course.create({ name: testc });
  //   const somthing1 = await Instructor.create({ name: testi });
  const { method } = req;
  const { course, collegeId } = req.body;
  console.log("id", collegeId);

  switch (method) {
    case "POST":
      const college = await College.findById(collegeId);
      console.log("collegefound", college);
      const cor = await Course.create({ name: course });
      console.log(course);
      await college.courses.push(cor);
      console.log(cor);
      res.status(201).json({ success: true, cor });
      await college.save();
      break;
    case "GET":
      //   const colleges = await College.find({});
      //   // console.log(colleges);
      //   res.status(200).json({ colleges });
      break;
  }
}
