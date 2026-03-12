import express from "express";
const router = express.Router();

let employees = [];

router.get("/employees", (req, res) => {
  res.json(employees);
});

router.post("/employees", (req, res) => {
  const employee = req.body;
  employees.push(employee);
  res.json(employee);
});

router.delete("/employees/:id", (req, res) => {
  const id = req.params.id;
  employees = employees.filter((e, i) => i != id);
  res.json({ message: "deleted" });
});

export default router;