import express from "express";
import Enquiry from "../module/enquiry.model.js";

const router = express.Router();

// ✅ GET ALL ENQUIRIES
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE ENQUIRY
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;