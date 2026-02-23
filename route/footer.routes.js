import express from 'express';
import { getFooter, createOrUpdateFooter } from '../controller/footer.controller.js';

const router = express.Router();

router.get('/', getFooter);
router.post('/', createOrUpdateFooter); // For admin usage

export default router;
