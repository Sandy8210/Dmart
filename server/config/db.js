import mongoose from "mongoose";
import "dotenv/config";

const URL = process.env.DB_URL;

export const connectDB = async () => {
  await mongoose
    .connect(URL)
    .then(() => console.log("DB connect Successful"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
