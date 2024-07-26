import AdminModel from "../models/adminModel.js";
import { createToken } from "../utills/createToken.js";
import { adminValidate } from "../validation/adminValidate.js";
import bcrypt from "bcrypt";

const validate = (adminData) => {
  return adminValidate.validate(adminData);
};

const saltRounds = 12;

const test = async (req, res) => {
  try {
    await res
      .status(200)
      .json({ success: true, message: "Testing  Successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Testing failed" });
  }
};

const adminRegister = async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const { name, email, password } = req.body;

    const existingAdmin = await AdminModel.findOne({ email });

    if (existingAdmin) {
      return res
        .status(201)
        .json({ success: false, message: "Admin Already existing" });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newAdmin = new AdminModel({
      name,
      password: hashPassword,
      email,
    });

    const adminData = await newAdmin.save();

    const token = createToken(adminData._id);

    res
      .status(200)
      .json({
        success: true,
        message: "Register Successful",
        data: adminData,
        token,
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Registration Failed" });
  }
};
const adminLogin = async (req, res) => {};

export { adminLogin, adminRegister, test };
