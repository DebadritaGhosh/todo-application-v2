import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import logger from "./config/logger.config.js";

// use dotENV
dotenv.config();

// env variables
const { MONGO_URI } = process.env;
const PORT = process.env.PORT || 5000;



// MongoDB connection

mongoose.connect(MONGO_URI).then(() => {
	logger.info("Connected to DB");
}).catch((e) =>{ 
	logger.error(`MongoDB connection error${e}`);
	process.exit(1);
});

// MongoDB debug mode
if (process.env.NODE_ENV !== "production") {
	mongoose.set("debug",true);
}

let server = app.listen(PORT, () => logger.info(`Server is listening!!! ${PORT}`));

const exitHandler = () => {
	if (server) {
		logger.info("Server closed !!");
		process.exit(1);
	} else {
		process.exit(1);
	}
}

const unexpectedError = (error) => {
	logger.error(error);
	exitHandler();
}

process.on("uncaughtException", unexpectedError);
process.on("unhandledRejection", unexpectedError);

// Sigterm
process.on("SIGTERM", () => {
	if (server) {
		logger.info("Server closed !!");
		process.exit(1);
	}
});