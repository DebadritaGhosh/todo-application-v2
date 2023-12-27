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
		throw createHttpError.Unauthorized("User not found");
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