import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

export const createToken = (id) => {
  if (!SECRET_KEY) {
    throw new Error("SECRET_CODE environment variable is not set.");
  }
  return jwt.sign({ id }, SECRET_KEY, { expiresIn: "1d" });
};
