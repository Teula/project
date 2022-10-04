import dbConnect from "../../../../../utils/dbConnect";
import { Course } from "../../../../../models/Course";
import { College } from "../../../../../models/College";
import { Major } from "../../../../../models/Major";
export default async function (req, res) {
  dbConnect();
  const { method, query } = req;
  const { newCourse } = req.body;

  const college = await College.findById(query.id)

    .populate([
      {
        path: "courses",
        populate: { path: "majors", model: "Major" },
      },
      {
        path: "courses",
        populate: { path: "prerequisites", model: "Course" },
      },
      // {
      //   path: "majors",
      //   populate: { path: "majors", model: "Major" },
      // },
    ])
    .populate("majors");
  console.log("1", query.id);

  switch (method) {
    case "GET": {
      console.log("c", college);
      const majors = await college.majors;
      const courses = await college.courses;

      // const courses = await Course.find()
      // .populate("prerequisites")
      // .populate("majors");

      res.status(200).json({ courses, majors });
      break;
    }
    case "POST": {
      // console.log("1", newCourse);

      //change to id
      const pre = await Course.find({ name: newCourse.pre });
      const maj = await Major.find({ name: newCourse.majors });

      console.log("t", maj, pre);
      const addedCourse = await Course.create({
        name: newCourse.name,
        code: newCourse.code,
      });
      for (let index = 0; index < pre.length; index++) {
        await addedCourse.prerequisites.push(pre[index]);
      }
      for (let index = 0; index < maj.length; index++) {
        await addedCourse.majors.push(maj[index]);
      }

      await addedCourse.save();
      console.log("ss", addedCourse);
      await college.courses.push(addedCourse);
      console.log(college.courses);
      await college.save();
      break;
    }
  }
}
