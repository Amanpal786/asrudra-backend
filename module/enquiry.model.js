import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  message: String
},{timestamps:true});

export default mongoose.model("Enquiry", enquirySchema);