// Importing services
import { createTodo } from "../services/todo.service.js";

// Register controller
export const addTodoController = async (req, res, next) => {
    try {
		const newTodo = await createTodo({
			user_id : req.user.userId,
			...req.body
		});
		res.json(newTodo);
    } catch (error) {
        next(error);
    }
}