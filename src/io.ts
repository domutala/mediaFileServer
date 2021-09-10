import * as http from "http";
import * as io from "socket.io";

export var socket: io.Server;

export default (server: http.Server) => {
  socket = new io.Server(server, { cors: { origin: "*" } });
  socket.on("connection", (sock: io.Socket) => {

    if (sock.handshake.query.token) {

      sock.join(sock.handshake.query.token);
      socket.to(sock.handshake.query.token).emit("notification", { message: 'Sallut' });
    }
  });
};

