// Import libraries
import express from "express";

// Import Routes
import authRouter from "./auth.router.js";
import todoRouter from "./todo.router.js";
import userRouter from "./user.router.js";

// app
const router = express.Router();

router.use('/auth',authRouter);
router.use('/todo',todoRouter);
router.use('/user',userRouter);


export default router;