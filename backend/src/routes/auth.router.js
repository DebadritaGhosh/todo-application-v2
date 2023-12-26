import express from "express";
import trimRequest from "trim-request";
import { registerController } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(trimRequest.all,registerController);


export default router;