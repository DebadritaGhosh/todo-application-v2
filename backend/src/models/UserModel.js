// Importing libraries
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide your name"]
	},
	email: {
		type: String,
		required: [true, "Please provide your email address"],
		unique: [true, "This email address already exists"],
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email address"]
	},
	picture: {
		type: String,
		default: "https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png"
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minLength: [6, "Please make sure your password is at least 6 characters long"],
		maxLength: [128, "Please make sure your password is less than 128 characters long"]
	},
	todos: [
		{
			type: ObjectId,
			ref: "TodoModel",
		},
	]
}, {
	collection: "users",
	timestamps: true,
});

// Encrypting password before saving the password
// userSchema.pre('save', async function (next) {
// 	try {
// 		if (this.isNew) {
// 			const salt = await bcrypt.genSalt(12);
// 			const hashedPassword = await bcrypt.hash(this.password, salt);
// 			this.password = hashedPassword;
// 		}
// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// });

userSchema.pre('save', async function (next) {
	try {
		if (this.isNew || this.isModified('password')) {
			const salt = await bcrypt.genSalt(12);
			const hashedPassword = await bcrypt.hash(this.password, salt);
			this.password = hashedPassword;
		}
		next();
	} catch (error) {
		next(error);
	}
});


const UserModel = mongoose.models.UserModel || mongoose.model("UserModel", userSchema);
export default UserModel;