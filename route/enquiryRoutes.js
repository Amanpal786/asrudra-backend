import express from "express";
import Enquiry from "../module/enquiry.model.js";

const router = express.Router();

// ✅ GET ALL
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ ADD ENQUIRY (🔥 YE MISSING THA)
router.post("/", async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();

    res.status(201).json(newEnquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE (optional)
router.delete("/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;