import { Course } from "../../models/Course";
import { Major } from "../../models/Major";
import { College } from "../../models/College";
import dbConnect from "../../utils/dbConnect";
import courses from "./college/[id]/courses";

// const CS = Major.create({
//   name: "Computer Science",
//   tag: "CS",
// });
// const SE = Major.create({
//   name: "Software Enginnering",
//   tag: "SE",
// });
// const IT = Major.create({
//   name: "Information Technology",
//   tag: "IT",
// });
// const CE = Major.create({
//   name: "Computer Engineering",
//   tag: "CE",
// });

// const course1 = Course.create({
//   name: "Database 1",
//   code: "3012",
// });
// const course2 = Course.create({
//   name: "CS 1",
//   code: "1412",
// });
// const course3 = Course.create({
//   name: "CS 2",
//   code: "2412",
// });

// // course2.prerequisites.push(course1);
// // course3.prerequisites.push(course1, course2);

// // course1.majors.push(SE, IT, CE, CS);
// // course2.majors.push(IT, CE, CS);
// // course3.majors.push(SE);

export default async function handler(req, res) {
  dbConnect();
  // const college = await College.create({
  //   name: "Computer Engineering and Science",
  // });
  // // const majors = await Major.find();

  // // const courses = await Course.find();
  // // // await college.majors.push(majors);
  // // await college.courses.push(courses);

  // const CS = await Major.create({
  //   name: "Computer Science",
  //   tag: "CS",
  // });
  // const SE = await Major.create({
  //   name: "Software Enginnering",
  //   tag: "SE",
  // });
  // const IT = await Major.create({
  //   name: "Information Technology",
  //   tag: "IT",
  // });
  // const CE = await Major.create({
  //   name: "Computer Engineering",
  //   tag: "CE",
  // });
  // const course1 = await Course.create({
  //   name: "Database 1",
  //   code: "3012",
  // });
  // const course2 = await Course.create({
  //   name: "CS 1",
  //   code: "1412",
  // });
  // const course3 = await Course.create({
  //   name: "CS 2",
  //   code: "2412",
  // });
  // console.log(course2);
  // await course1.prerequisites.push(course3, course2);
  // await course3.prerequisites.push(course2);
  // await course1.majors.push(SE, IT, CE, CS);
  // await course2.majors.push(IT, CE, CS);
  // await course3.majors.push(SE);
  // await course1.save();
  // await course2.save();
  // await course3.save();
  // await college.courses.push(course1, course2, course3);
  // await college.majors.push(SE, IT, CE, CS);

  // await college.save();

  // res.status(200).json({ name: "John Doe" });

  ///

  const college = await College.create({
    name: "College of Engineering",
  });
  // const majors = await Major.find();

  // const courses = await Course.find();
  // // await college.majors.push(majors);
  // await college.courses.push(courses);

  const CS = await Major.create({
    name: "Civil Engineering",
    tag: "CE",
  });
  const SE = await Major.create({
    name: "Electrical Engineering",
    tag: "EE",
  });
  // const IT = await Major.create({
  //   name: "Information Technology",
  //   tag: "IT",
  // });
  const CE = await Major.create({
    name: "Mechanical Engineering",
    tag: "ME",
  });
  const course1 = await Course.create({
    name: "Calculus I",
    code: "1422",
  });
  // const course2 = await Course.create({
  //   name: "CS 1",
  //   code: "1412",
  // });
  // const course3 = await Course.create({
  //   name: "CS 2",
  //   code: "2412",
  // });
  // console.log(course2);
  // await course1.prerequisites.push(course3, course2);
  // await course3.prerequisites.push(course2);
  // await course1.majors.push(SE,  CE, CS);
  // await course2.majors.push( CE, CS);
  // await course3.majors.push(SE);
  await course1.save();
  // await course2.save();
  // await course3.save();
  await college.courses.push(course1);
  await college.majors.push(SE, CE, CS);

  await college.save();

  res.status(200).json({ name: "John Doe" });
}
