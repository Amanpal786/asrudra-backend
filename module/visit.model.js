import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({

client:{
type:String,
required:true
},

property:{
type:String,
required:true
},

date:{
type:String,
required:true
},

status:{
type:String,
default:"Scheduled"
}

});

export default mongoose.model("Visit",visitSchema);