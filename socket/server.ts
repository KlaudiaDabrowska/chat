import { Server } from "socket.io";
import { IN_MESSAGE, OLD_MESSAGES, OUT_MESSAGE } from "../consts";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    console.log("Client connected");
    socket.emit("connected", "Connected");
    socket.on("message", (arg) => {
      console.log(arg);
      socket.broadcast.emit("connected", arg);
    });
  });
}
