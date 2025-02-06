const fs = require("fs");
const http = require("http");
const path = require("path");

const readableStream = fs.createWriteStream("");

const writeableStream = fs.createWriteStream("example-output.txt");

readableStream.pipe(writeableStream);
