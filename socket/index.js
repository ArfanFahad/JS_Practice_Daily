import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";

const app = new express();
const server = new createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User connected");
});
