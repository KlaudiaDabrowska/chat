import { Server } from "socket.io";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    console.log("Client connected");
    socket.emit("connected", "Connected");

    socket.on("message", (arg) => {
      console.log(arg);
      socket.broadcast.emit("message", arg);
    });
  });
}
