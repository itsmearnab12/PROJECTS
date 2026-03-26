import express from 'express';
import userAuth from '../middleware/userAuth';
import { login, logout, signup } from '../controller/authcontroller.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;