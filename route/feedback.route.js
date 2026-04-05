import express from "express";

import {
  addFeedback,
  getFeedbacks,
  deleteFeedback,
  updateFeedback,
} from "../controller/feedback.controller.js";

const router = express.Router();

router.post("/", addFeedback);
router.get("/", getFeedbacks);
router.delete("/:id", deleteFeedback);
router.put("/:id", updateFeedback);

export default router;