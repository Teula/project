// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method, body, query } = req;
  dbConnect();
  switch (method) {
    case "GET":
      dbConnect();
      console.log(query.index);
      const user = await User.find({ _id: query.index });
      res.status(200).json({ user });
      console.log("testUser", user);
      break;

    default:
      break;
  }
  if (method == "GET") {
  }
}
