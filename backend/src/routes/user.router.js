// Importing libraries
import express from "express";
import trimRequest from "trim-request";

// Importing middlewares
import authMiddleware from "../middlewares/authMiddleware.js";

// Importing controllers
import { updateProfileController } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").patch(trimRequest.all, authMiddleware, updateProfileController);


export default router;