import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  phone: String,
  email: String,
  status: {
    type: String,
    default: "Active"
  }
});

export default mongoose.model("Employee", employeeSchema);