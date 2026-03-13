import express from "express";

import {
getVisits,
addVisit,
deleteVisit,
getSingleVisit,
updateVisit
} from "../controller/visit.controller.js";

const router = express.Router();

router.get("/visits",getVisits);

router.post("/visits",addVisit);

router.delete("/visits/:id",deleteVisit);

router.get("/visits/:id",getSingleVisit);

router.put("/visits/:id",updateVisit);

export default router;