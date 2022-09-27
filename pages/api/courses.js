import dbConnect from "../../utils/dbConnect";
import { Course } from "../../models/Course";

import { Major } from "../../models/Major";
import { College } from "../../models/College";

export default async function (req, res) {
  dbConnect();
  const { method } = req;
  switch (method) {
    case "GET": {
      const courses = await Course.find()
        .populate("prerequisites")
        .populate("majors");
      console.log(courses);
      res.status(200).json(courses);
      // const courses = await Course.find({ majors tag: "SE" })

      //   .populate("prerequisites")
      //   .populate("majors");
      // console.log(courses);
      // res.status(200).json(courses);
      break;
    }
  }
}
