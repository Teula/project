const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(
    "mongodb+srv://teula:201702128@cluster0.tszct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  console.log("connected");
};

export default dbConnect;
