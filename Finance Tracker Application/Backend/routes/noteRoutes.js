import express from "express";
import userAuth from "../middleware/userAuth.js";
import { createNote, deleteNote, getNotes } from "../controller.js/noteController.js";

const noteRouter = express.Router();

noteRouter.post("/create", userAuth, createNote);
noteRouter.get("/", userAuth, getNotes);
noteRouter.delete("/:id", userAuth, deleteNote);

export default noteRouter;