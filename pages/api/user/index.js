import User from "../../../models/userSchema";
import connectMongo from "../../../utils/connect";

const handler = async (req, res) => {
  connectMongo();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const newUser = new User({ ...req.body });
        await newUser.save();
        res.status(200).json(newUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
}

export default handler;
