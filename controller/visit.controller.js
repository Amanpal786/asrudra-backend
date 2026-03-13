import Visit from "../module/visit.model.js";

/* GET ALL */

export const getVisits = async(req,res)=>{
const visits = await Visit.find();
res.json(visits);
};

/* ADD */

export const addVisit = async(req,res)=>{

const visit = new Visit(req.body);

await visit.save();

res.json({message:"Visit Added"});

};

/* DELETE */

export const deleteVisit = async(req,res)=>{

await Visit.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

};

/* GET SINGLE */

export const getSingleVisit = async(req,res)=>{

const visit = await Visit.findById(req.params.id);

res.json(visit);

};

/* UPDATE */

export const updateVisit = async(req,res)=>{

await Visit.findByIdAndUpdate(req.params.id,req.body);

res.json({message:"Updated"});

};