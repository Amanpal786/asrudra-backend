// backend/controllers/category.controller.js
import Category from '../module/category.model.js'; // ✅ Corrected import path

/**
 * @desc Get all property categories
 * @route GET /categories
 * @access Public
 */
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found." });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.error("❌ Error fetching categories:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc Create a new category
 * @route POST /categories
 * @access Public or Admin
 */
export const createCategory = async (req, res) => {
  try {
    const { id, title, description, count, path, gradient } = req.body;

    // Basic field validation
    if (!id || !title || !description || !count || !path || !gradient) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCategory = new Category({ id, title, description, count, path, gradient });
    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error("❌ Error creating category:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
