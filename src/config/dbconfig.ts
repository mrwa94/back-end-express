import mongoose from "mongoose";
import { dev } from "./server";

export const connectDB = async () => {
  try {
    await mongoose.connect(dev.db.url);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
