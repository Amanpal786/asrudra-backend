import express from "express";
import Employee from "../module/employee.model.js";

const router = express.Router();


// GET ALL EMPLOYEES
router.get("/employees", async (req,res)=>{

const employees = await Employee.find();

res.json(employees);

});


// GET SINGLE EMPLOYEE
router.get("/employees/:id", async (req,res)=>{

const employee = await Employee.findById(req.params.id);

res.json(employee);

});


// CREATE EMPLOYEE
router.post("/employees", async (req,res)=>{

const employee = new Employee(req.body);

await employee.save();

res.json(employee);

});


// UPDATE EMPLOYEE
router.put("/employees/:id", async (req,res)=>{

const employee = await Employee.findByIdAndUpdate(
req.params.id,
req.body,
{ new:true }
);

res.json(employee);

});


// DELETE EMPLOYEE
router.delete("/employees/:id", async (req,res)=>{

await Employee.findByIdAndDelete(req.params.id);

res.json({message:"Employee deleted"});

});

export default router;