import express from "express";
import {
getHiring,
addHiring,
deleteHiring,
getSingleHiring,
updateHiring
} from "../controller/hiring.controller.js";

const router = express.Router();

router.get("/hiring",getHiring);

router.post("/hiring",addHiring);

router.delete("/hiring/:id",deleteHiring);

router.get("/hiring/:id",getSingleHiring);

router.put("/hiring/:id",updateHiring);

export default router;