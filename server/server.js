import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import adminRouter from "./route/adminRoute.js";

// ! APP CONFIG
const app = express();
const PORT = process.env.PORT || 8080;
// const PORT = 8080;

// ! MIDDELEWARE
app.use(express.json());
app.use(cors());

// ! DB CONNECTION
// connectDB();

// ! API ENDPOINTS
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
