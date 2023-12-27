import express from "express";
import authRoutes from "./auth.router.js";
import ConversationRoutes from "./conversation.router.js";
import MessageRoutes from "./message.router.js";

const router = express.Router();

router.use('/auth',authRoutes);
router.use('/conversation', ConversationRoutes);
router.use("/message", MessageRoutes);

export default router;