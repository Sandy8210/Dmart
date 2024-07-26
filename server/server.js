import express from "express";
import { connectDB } from "./config/db.js";
import 'dotenv/config'
import cors from 'cors'
import adminRouter from "./router/adminRouter.js";

// CONFIG
const app = express();
const PORT = process.env.PORT || 8003;

// MIDDELEWARE
app.use(express.json())
app.use(cors())

// DB CONNECTION
connectDB();

// API ENDPOINTS
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
