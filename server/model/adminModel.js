import mongoose from "mongoose";

const adminScheme = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel =
  mongoose.models.admin || mongoose.model("admin", adminScheme);

export default AdminModel;
