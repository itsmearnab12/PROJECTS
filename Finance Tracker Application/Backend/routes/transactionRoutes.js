import express from "express";
import userAuth from "../middleware/userAuth.js";
import { addTransaction, deleteTransaction, getSummary, getTransaction } from "../controller.js/transactionController.js";

const transactionRouter = express.Router();

transactionRouter.post("/add", userAuth, addTransaction);
transactionRouter.get("/", userAuth, getTransaction);
transactionRouter.delete("/:id", userAuth, deleteTransaction);
transactionRouter.get("/summary", userAuth, getSummary);

export default transactionRouter;