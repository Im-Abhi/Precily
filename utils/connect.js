import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
};

export default connectMongo;
