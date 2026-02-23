import express from "express";
import multer from "multer";
import { getAllResale, uploadResale } from "../controller/resaleController.js";

const router = express.Router();

// Image upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// Routes
router.get("/", getAllResale);
router.post("/upload", upload.array("images", 10), uploadResale);

// ✅ Fix: export default router
export default router;
