// Importing libraries
import express from "express";
import trimRequest from "trim-request";

// Importing middlewares
import authMiddleware from "../middlewares/authMiddleware.js";

// Importing controllers
import { addTodoController } from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(trimRequest.all, authMiddleware, addTodoController);


export default router;