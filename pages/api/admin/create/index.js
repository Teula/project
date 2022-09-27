const mongoose = require("mongoose");
import { College } from "../../../../models/College";

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
  const { college } = req.body;
  console.log(method);
  switch (method) {
    case "POST":
      if (college) {
        const col = await College.create({ name: college });
        console.log(col);
        res.status(201).json({ success: true, col });
      }
      break;
    case "GET":
      const colleges = await College.find({});
      // console.log(colleges);
      res.status(200).json({ colleges });
  }
}
