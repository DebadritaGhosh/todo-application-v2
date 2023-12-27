// Importing libraries
import mongoose from "mongoose";
import validator from "validator";

const { ObjectId } = mongoose.Schema.Types;


const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, "Todo title is required."],
	},
	body: {
		type: String,
		required: [true, "Todo body is required."],
	},
    priority: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5],
        default: 3,
		required: [true, "Todo priority is required."],
    },
    due_date: {
        type: Date,
        required: true,
		required: [true, "Todo due date is required."],
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'finished'],
        default: 'pending',
		required: [true, "Todo status is required."],
    }
}, {
	collection: "todos",
	timestamps: true,
})


const TodoModel = mongoose.models.TodoModel || mongoose.model("TodoModel", todoSchema);
export default TodoModel;