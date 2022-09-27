import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

// dbConnect();
const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://teula:201702128@cluster0.tszct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  console.log("connected");
};

export default function notes(req, res) {
  connectDB();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const note = await new Note(req.body);
        res.status(201).json({ success: true, note });
        // note.save();
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
