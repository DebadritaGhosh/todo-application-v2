import createHttpError from "http-errors";
import validator from "validator";
import bcrypt from "bcrypt";

import {UserModel} from "../models/index.js";
//eNV
const {DEFAULT_PICTURE, DEFAULT_STATUS}= process.env;

export const createUser = async (userData) => {
	const { name, email, status, picture, password } = userData;

	// check if fields are empty
	if (!name || !email || !password) {
		throw createHttpError.BadRequest("Please fill all fields");
	}

	//check name length
	if (!validator.isLength(name, {
		min: 2,
		max: 16
	})) {
		throw createHttpError.BadRequest("Please make sure your name in between 2 to 16 character");
	}

	//check status length
	if (status && status.length > 64) {
			throw createHttpError.BadRequest("Please make sure your status is less than 64 character");
	}

	//check if email is valid
	if(!validator.isEmail(email)){
		throw createHttpError.BadRequest("Please provide a valid email address.");		
	}

	//check if user already exists
	const checkDB = await UserModel.findOne({email});

	if(checkDB){
		throw createHttpError.Conflict("Please provide a different email address, This email already exists");		
	}
	
	if(!validator.isLength(password,{
		min : 6,
		max: 128
	})){
		throw createHttpError.BadRequest("Please make sure your password in between 6 to 128 character");
	}

	const user = await new UserModel({
		name,
		email,
		picture: picture || DEFAULT_PICTURE,
		status : status || DEFAULT_STATUS,
		password
	}).save();

	return user;
}

export const signUser = async (email,password) => {
	const user = await UserModel.findOne({email : email.toLowerCase()}).lean();
	
	//check if email exists
	if(!user){
		throw createHttpError.BadRequest("Invalid credentials.");
	}

	//compare password
	let passwordMatches = await bcrypt.compare(password, user.password);

	if(!passwordMatches){
		throw createHttpError.BadRequest("Invalid password.");
	}

	return user;
}