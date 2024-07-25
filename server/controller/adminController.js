import AdminModel from "../model/adminModel.js";

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


const adminRegister = async () => {};
const adminLogin = async () => {};

export { adminLogin, adminRegister, test };
