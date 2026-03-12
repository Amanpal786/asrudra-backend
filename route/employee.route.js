import express from "express";
import { getEmployees, addEmployee, deleteEmployee } from "../controller/employee.controller.js";

const router = express.Router();

router.get("/employees", getEmployees);
router.post("/employees", addEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;