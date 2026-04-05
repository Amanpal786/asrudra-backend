import Feedback from "../module/feedback.js";

// CREATE
export const addFeedback = async (req, res) => {
  try {
    const fb = new Feedback(req.body);
    await fb.save();
    res.json(fb);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getFeedbacks = async (req, res) => {
  try {
    const data = await Feedback.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

// UPDATE
export const updateFeedback = async (req, res) => {
  const updated = await Feedback.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};