import express from "express";
import Employee from "../module/employee.model.js";

const router = express.Router();


// GET ALL EMPLOYEES
router.get("/employees", async (req,res)=>{

try{

const employees = await Employee.find();

res.json(employees);

}catch(err){
res.status(500).json(err);
}

});


// GET SINGLE EMPLOYEE
router.get("/employees/:id", async (req,res)=>{

try{

const employee = await Employee.findById(req.params.id);

res.json(employee);

}catch(err){
res.status(500).json(err);
}

});


// CREATE EMPLOYEE
router.post("/employees", async (req,res)=>{

try{

const employee = new Employee(req.body);

await employee.save();

res.json(employee);

}catch(err){
res.status(500).json(err);
}

});


// UPDATE EMPLOYEE
router.put("/employees/:id", async (req,res)=>{

try{

const employee = await Employee.findByIdAndUpdate(
req.params.id,
req.body,
{ new:true }
);

res.json(employee);

}catch(err){
res.status(500).json(err);
}

});


// DELETE EMPLOYEE
router.delete("/employees/:id", async (req,res)=>{

try{

await Employee.findByIdAndDelete(req.params.id);

res.json({message:"Employee deleted"});

}catch(err){
res.status(500).json(err);
}

});


export default router;