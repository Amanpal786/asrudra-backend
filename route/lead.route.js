import express from "express";
import Enquiry from "../module/enquiry.model.js"; // ✅ correct model

const router = express.Router();


// ✅ GET ALL (enquiries = leads)
router.get("/", async (req, res) => {
  try {
    const leads = await Enquiry.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ GET SINGLE
router.get("/:id", async (req, res) => {
  try {
    const lead = await Enquiry.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;