const fs = require("fs");
const http = require("http");

// Server
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});

server.listen(8000, "127.0.0.1");
