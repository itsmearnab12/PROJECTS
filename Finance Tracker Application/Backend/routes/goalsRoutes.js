import express from "express";
import { addGoal, getGoals } from "../controller.js/goalcontroller.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.post("/", userAuth, addGoal);
router.get("/", userAuth, getGoals);

export default router;