const fs = require("fs");

// // Blocking synchrous
// const textIn = fs.readFile("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about avocado. ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

// Non-blocking, asynchrouns way
fs.readFile("./txt/start.txt", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written!!!@@@@");
      });
    });
  });
});
console.log("Will read file");
