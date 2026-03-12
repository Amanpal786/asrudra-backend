import Hiring from "../module/hiring.model.js";

/* GET ALL */

export const getHiring = async(req,res)=>{

const data = await Hiring.find();
res.json(data);

};

/* ADD */

export const addHiring = async(req,res)=>{

const hiring = new Hiring(req.body);
await hiring.save();

res.json({message:"Hiring Added"});

};

/* DELETE */

export const deleteHiring = async(req,res)=>{

await Hiring.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

};

/* GET SINGLE */

export const getSingleHiring = async(req,res)=>{

const data = await Hiring.findById(req.params.id);

res.json(data);

};

/* UPDATE */

export const updateHiring = async(req,res)=>{

await Hiring.findByIdAndUpdate(
req.params.id,
req.body
);

res.json({message:"Updated"});

};