import express from 'express';
import { getAllCategories } from '../controller/category.controller.js'; // ✅ Fixed path

const router = express.Router();

router.get('/', getAllCategories);

export default router;
