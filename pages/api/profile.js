// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const { method, body } = req;
  if (method == "PUT") {
    let user = await User.findByIdAndUpdate(body.session.user._id, {
      year: body.year,
    });
    await user.save();
  }

  res.status(200).json();
}
