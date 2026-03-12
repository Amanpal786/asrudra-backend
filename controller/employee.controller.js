import Employee from "../module/employee.model.js";

export const getEmployees = async (req,res)=>{
const employees = await Employee.find();
res.json(employees);
};

export const addEmployee = async (req,res)=>{
const employee = new Employee(req.body);
await employee.save();
res.json(employee);
};

export const deleteEmployee = async (req,res)=>{
await Employee.findByIdAndDelete(req.params.id);
res.json({message:"deleted"});
};