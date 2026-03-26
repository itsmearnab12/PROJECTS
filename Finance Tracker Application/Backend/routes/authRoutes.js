import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { login, logout, signup } from '../controller.js/authController.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;