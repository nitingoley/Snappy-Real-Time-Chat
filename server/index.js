import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import router from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import message_route from "./routes/message.route.js";
dotenv.config();
import cors from "cors";
import { app, server } from "./config/socket.js";
import path from "path";

// app

// Middleware to parse JSON requests
app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Start Server
const port = process.env.PORT || 5000;
const _dirname = path.resolve();

// Example API Endpoint
app.use("/api/auth", router);
app.use("/api/messages", message_route);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../client", "dist", "index.html"));
  });
}

server.listen(port, () => {
  connectDB();
  console.log(`Server running on http://localhost:${port}`);
});
