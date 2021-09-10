import * as http from "http";
import express from './express';
import io from './io';


export default ({ port = 6002 }: { port?: number; }) => {
  console.clear();

  var server = http.createServer(express());
  io(server);

  // listen
  server.listen(port);
  console.log("server is run on " + port);

};

