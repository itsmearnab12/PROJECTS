import express from "express";
import userAuth from "../middleware/userAuth.js";
import { addTransaction, deleteTransaction, getTransaction } from "../controller.js/transactionController.js";

const transactionRouter = express.Router();

transactionRouter.post("/add", userAuth, addTransaction);
transactionRouter.get("/", userAuth, getTransaction);
transactionRouter.delete("/:id", userAuth, deleteTransaction);

export default transactionRouter;