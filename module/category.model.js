import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  count: String,
  path: String,
  gradient: String,
  icon: String,
  properties: [Object], // Use Object or schema if property is nested
});

// Prevent OverwriteModelError by checking if model already exists
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
