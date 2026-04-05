import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;