import express from "express";
import userAuth from "../middleware/userAuth.js";
import { Person } from "../models.js/Person.js";
import { login, logout, signup } from "../controller.js/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.get("/me", userAuth, async (req, res) => {
  const user = await Person.findById(req.userId).select("-password");

  if (!user) {
    return res.json({ success: false });
  }

  res.json({
    success: true,
    user,
  });
});

export default authRouter;
