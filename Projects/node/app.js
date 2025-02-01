const fs = require("fs");

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(error);
//     return;
//   }
//   console.log(data);
// });

const content = "Hello, NodeJS";
fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
