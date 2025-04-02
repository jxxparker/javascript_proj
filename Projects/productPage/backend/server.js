//password tjMkTGKkTvkxpnox

import express from "express";

const app = express();

app.get("/products", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("server is running on localhost:5000");
});
