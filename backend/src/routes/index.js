// Import libraries
import express from "express";

// Import Routes
import authRouter from "./auth.router.js";
import todoRouter from "./todo.router.js";

// app
const router = express.Router();

router.use('/auth',authRouter);
router.use('/todo',todoRouter);


export default router;