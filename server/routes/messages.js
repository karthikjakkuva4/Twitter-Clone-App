import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  CreateMessage,
  deleteMessage,
  updateMessage,
  getUserMessage,
} from "../controllers/message.js";

const router = express.Router();

// Create a Message
router.post("/", verifyToken, CreateMessage);

// Delete a Message
router.delete("/:id", verifyToken, deleteMessage);

// Update a Message
router.put("/:id", updateMessage); // Removed "/message" from the route

// Get user Messages only
router.get("/user/all/:id", getUserMessage);

export default router;
