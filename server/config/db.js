import mongoose from "mongoose";
import "dotenv/config";

const DB = process.env.DB_URL || "mongodb://localhost:27017/dmart";
export const connectDB = async () => {
  mongoose
    .connect(DB)
    .then((res) => console.log(`${DB} connect successful`))
    .catch((err) => console.log(err));
};
