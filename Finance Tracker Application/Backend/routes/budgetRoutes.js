import express from "express";
import { addBudget, delBudgetcard, getBudgets } from "../controller.js/budgetController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.post("/", userAuth, addBudget);
router.get("/", userAuth, getBudgets);
router.delete("/:id", userAuth, delBudgetcard);

export default router;
