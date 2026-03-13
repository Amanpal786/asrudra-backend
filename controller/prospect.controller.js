import Prospect from "../module/prospect.model.js";

/* GET ALL */

export const getProspects = async(req,res)=>{

const data = await Prospect.find();

res.json(data);

};

/* GET ONE */

export const getProspect = async(req,res)=>{

const data = await Prospect.findById(req.params.id);

res.json(data);

};

/* CREATE */

export const createProspect = async(req,res)=>{

const newProspect = new Prospect(req.body);

await newProspect.save();

res.json(newProspect);

};

/* UPDATE */

export const updateProspect = async(req,res)=>{

const updated = await Prospect.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(updated);

};

/* DELETE */

export const deleteProspect = async(req,res)=>{

await Prospect.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

};