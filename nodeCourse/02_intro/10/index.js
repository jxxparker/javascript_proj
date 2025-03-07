const fs = require("fs");

// Blocking synchrous
const textIn = fs.readFile("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about avocado. ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");

// Non-blocking, asynchrouns way
fs.readFile("./txt/start.txt", (err, data) => {
  console.log(data);
});
