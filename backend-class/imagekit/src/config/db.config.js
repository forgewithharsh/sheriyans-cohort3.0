import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error in connection of MongoDB", error.message);
  }
};

export default connectDB;
