// routes/exclusiveRoutes.js
import express from 'express';
import { getExclusivePropertyById } from '../controller/ex.Controller.js';

const router = express.Router();

router.get('/:id', getExclusivePropertyById); // e.g., /exclusive/101

export default router;
