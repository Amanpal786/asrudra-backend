import mongoose from "mongoose";

const hiringSchema = new mongoose.Schema({

name: {
type:String,
required:true
},

position:{
type:String,
required:true
},

phone:{
type:String,
required:true
},

status:{
type:String,
default:"Pending"
}

});

export default mongoose.model("Hiring", hiringSchema);