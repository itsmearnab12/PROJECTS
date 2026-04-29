import express from "express";
import { addBudget, getBudgets } from "../controller.js/budgetController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.post("/", userAuth, addBudget);
router.get("/", userAuth, getBudgets);

export default router;
