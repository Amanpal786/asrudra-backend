import express from "express";

import Lead from "../module/lead.model.js";
import Visit from "../module/visit.model.js";
import Employee from "../module/employee.model.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {

    const totalLeads = await Lead.countDocuments();
    const clientVisits = await Visit.countDocuments();
    const employees = await Employee.countDocuments();

    const closedDeals = await Lead.countDocuments({ status: "Closed" });

    res.json({
      totalLeads,
      clientVisits,
      employees,
      closedDeals
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;