import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config";

// ! APP CONFIG

const app = express();
const PORT = 8080;

// ! MIDDELEWARE

app.use(express.json());
app.use(cors());

// ! DB CONNECTION
connectDB();

// ! API ENDPOINTS

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
