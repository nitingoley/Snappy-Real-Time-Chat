import express from "express";
import {
  getMessages,
  getUsersForSideBar,
  sendMessage,
} from "../controller/message.controller.js";
import protectRoute from "../middleware/auth.middleware.js";

const message_route = express.Router();

message_route.get("/users", protectRoute, getUsersForSideBar);
message_route.get("/:id", protectRoute, getMessages);
message_route.post("/send/:id", protectRoute, sendMessage);

export default message_route;
