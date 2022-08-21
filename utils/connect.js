import mongoose from "mongoose";

// connect with mongoDB cloud database
const connectMongo = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
};

export default connectMongo;
