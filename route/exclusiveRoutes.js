// routes/exclusiveRoutes.js

import express from 'express';
import {
  getAllProperties,
  getPropertyById,
  createProperty
} from '../controller/exclusiveController.js';

const router = express.Router();

// Routes
router.get('/', getAllProperties);       // GET all exclusive properties
router.get('/:id', getPropertyById);     // GET a single property by ID
router.post('/', createProperty);        // POST (create) a new property

export default router;
