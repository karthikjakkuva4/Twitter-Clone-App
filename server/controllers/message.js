import Message from "../models/Message.js"; // Import the Message model
import { handleError } from "../error.js";

export const CreateMessage = async (req, res, next) => {
  const newMessage = new Message(req.body); // Create a new Message
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    handleError(500, err);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id); // Find a message by ID
    if (message.userId === req.user.id) {
      await message.deleteOne();
      res.status(200).json("Message has been deleted");
    } else {
      handleError(403, "You are not authorized to delete this message");
    }
  } catch (err) {
    handleError(500, err);
  }
};

export const updateMessage = async (req, res, next) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedMessage);
  } catch (err) {
    handleError(500, err);
  }
};

export const getUserMessage = async (req, res, next) => {
  try {
    const userMessage = await Message.find({ userId: req.params.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(userMessage);
  } catch (err) {
    handleError(500, err);
  }
};
