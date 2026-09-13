import mongoose from "mongoose";
import config from "./config.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
}
