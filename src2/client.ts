import * as io from "socket.io-client";

console.clear();
const socket = io.io(
  "http://192.168.181.58:6002"
);

socket.on("connect_error", (err) => {
  console.log(err);
});

console.log(socket.connected);

