import mongoose from "mongoose";

const prospectSchema = new mongoose.Schema({

name:String,
phone:String,
interest:String,
status:String

},{timestamps:true});

export default mongoose.model("Prospect",prospectSchema);