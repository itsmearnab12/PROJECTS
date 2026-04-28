import express from "express";
import { addBudget, getBudgets } from "../controller.js/budgetController";
import userAuth from "../middleware/userAuth";

const router = express.Router();

router.post("/", userAuth, addBudget);
router.get("/", userAuth, getBudgets);

export default router;
