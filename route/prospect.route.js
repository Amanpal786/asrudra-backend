import express from "express";
import {
getProspects,
getProspect,
createProspect,
updateProspect,
deleteProspect
} from "../controller/prospect.controller.js";

const router = express.Router();

router.get("/prospects",getProspects);
router.get("/prospects/:id",getProspect);
router.post("/prospects",createProspect);
router.put("/prospects/:id",updateProspect);
router.delete("/prospects/:id",deleteProspect);

export default router;