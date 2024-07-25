import express from "express";
import { adminRegister, test } from "../controller/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/test", test);
adminRouter.post("/register", adminRegister);

export default adminRouter;
