// Importing services
import { createTodo,editTodo,deleteTodo } from "../services/todo.service.js";

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

// Register controller
export const editTodoController = async (req, res, next) => {
    try {
		const updatedTodo = await editTodo({
			user_id : req.user.userId,
			todo_id : req.params.todoId,
			...req.body
		});
		res.json(updatedTodo);
    } catch (error) {
        next(error);
    }
}

// Register controller
export const deleteTodoController = async (req, res, next) => {
	try {
		const deletedTodo = await deleteTodo({
			user_id : req.user.userId,
			todo_id : req.params.todoId,
		});

		res.json(
			{
				status : "ok",
				message: "todo deleted successfully",
				...deletedTodo,
			}
		);
    } catch (error) {
        next(error);
    }
}