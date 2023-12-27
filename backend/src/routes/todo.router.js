// Importing libraries
import express from "express";
import trimRequest from "trim-request";

// Importing middlewares
import authMiddleware from "../middlewares/authMiddleware.js";

// Importing controllers
import { addTodoController, deleteTodoController, editTodoController } from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(trimRequest.all, authMiddleware, addTodoController);
router.route("/:todoId").put(trimRequest.all, authMiddleware, editTodoController);
router.route("/:todoId").delete(trimRequest.all, authMiddleware, deleteTodoController);


export default router;