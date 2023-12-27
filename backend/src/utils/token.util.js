// Importing libraries
import jwt from "jsonwebtoken";

// Importing configs
import logger from "../configs/logger.config.js";

// Making jwt asynchronous
export const sign = async (payload, expiresIn, secret) => {
	return new Promise((resolve, reject) => {
		jwt.sign(payload, secret, {
			expiresIn: expiresIn
		}, (error, token) => {
			if (error) {
				reject(error);
				logger.error(error);
			} else {
				resolve(token);
			}
		})
	});
}