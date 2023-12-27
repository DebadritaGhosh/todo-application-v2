// Importing models
import createHttpError from "http-errors";
import { UserModel, TodoModel } from "../models/index.js";


export const createTodo = async (todoData) => {
	const { user_id, title, body, priority, due_date, status } = todoData;

	console.log(user_id, title, body, priority, due_date, status);

	// Checking if fields are empty
	if (!user_id || !title || !body || !priority || !due_date || !status) {
		throw createHttpError.BadRequest("Please fill all fields to add a todo");
	}

	// Checking if the user exists
	const user = await UserModel.findById(user_id);
	if (!user) {
		throw createHttpError.NotFound("User not found");
	}

	// Creating a new todo
	const newTodo = await TodoModel.create({
		title,
		body,
		priority,
		due_date,
		status,
	});

	// Adding the new todo to the user's todos array
	user.todos.push(newTodo._id);
	await user.save();

	return newTodo;
}


export const editTodo = async (todoData) => {

	const { user_id, todo_id, title, body, priority, due_date, status } = todoData;

	// Find the todo by ID
	const todo = await TodoModel.findById(todo_id);
	if (!todo) {
		throw createHttpError.NotFound("Todo not found");
	}

	// Updating the todo
	if (title) {
		todo.title = title;
	}
	if (body) {
		todo.body = body;
	}
	if (priority) {
		todo.priority = priority;
	}
	if (due_date) {
		todo.due_date = due_date;
	}
	if (status) {
		todo.status = status;
	}

	await todo.save();

	return todo

}


export const deleteTodo = async (todoData) => {

	const { todo_id } = todoData;


	 // Finding the todo
	 const deletedTodo = await TodoModel.findByIdAndDelete(todo_id);

	 // Checking if the todo exists
	 if (!deletedTodo) {
	   throw createHttpError.NotFound("Todo not found");

	 }

	  // Removing the reference from user
	  await UserModel.updateOne({ todos: todo_id }, { $pull: { todos: todo_id } });

	 return deletedTodo;
}