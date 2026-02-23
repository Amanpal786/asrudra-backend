import express from "express";
import { getProperty } from '../controller/property.controller.js';

const router = express.Router();

router.get("/", getProperty); // GET /property

export default router;
