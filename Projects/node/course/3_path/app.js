const fs = require("fs");
const http = require("http");
const path = require("path");

const directory = "/user/local";
const fileName = "example.txt";

const fullPath = path.join(directory, fileName);

console.log(fullPath);
