// Importing services
import { createTodo,editTodo,deleteTodo } from "../services/todo.service.js";

// Add todo controller
export const addTodoController = async (req, res, next) => {
    try {
		const newTodo = await createTodo({
			user_id : req.user.userId,
			...req.body
		});

		res.status(201).json({
            message: "Add todo success.",
            status: "ok",
            data: newTodo
        })
    } catch (error) {
        next(error);
    }
}

// Edit todo controller
export const editTodoController = async (req, res, next) => {
    try {
		const updatedTodo = await editTodo({
			user_id : req.user.userId,
			todo_id : req.params.todoId,
			...req.body
		});
		res.status(201).json({
            message: "Edit todo success.",
            status: "ok",
            data: updatedTodo
        });
    } catch (error) {
        next(error);
    }
}

// Delete todo controller
export const deleteTodoController = async (req, res, next) => {
	try {
		const deletedTodo = await deleteTodo({
			user_id : req.user.userId,
			todo_id : req.params.todoId,
		});

		res.status(204).json({
            message: "Delete todo success.",
            status: "ok",
            data: deletedTodo
        });
    } catch (error) {
        next(error);
    }
}