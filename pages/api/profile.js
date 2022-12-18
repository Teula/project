// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const { method, body } = req;
  if (method == "PUT") {
    let user = await User.findByIdAndUpdate(body.session.user._id, {
      // major, year, session, uname, gpa, campus
      year: body.year,
      gpa: body.gpa,
      campus: body.campus,
      major: body.major,
      name: body.uname,
    });
    await user.save();
  }

  res.status(200).json();
}
