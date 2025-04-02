//da8YeNEUp9QEfO9h
// const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
// const app = express();
// const productRoute = require("./routes/product.route.js");

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //routes
// app.use("/api/products", productRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from NODE API Server");
// });

// mongoose
//   .connect(
//     "mongodb+srv://jihunpark1992:da8YeNEUp9QEfO9h@backenddb.6asdr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
//   )
//   .then(() => {
//     console.log("Connected to databse!");
//     app.listen(3000, () => {
//       console.log("Server is running on Port 3000");
//     });
//   })
//   .catch(() => {
//     console.log("Connection failed");
//   });

// app.get("/api/products", async (req, res) => {
//   //get all products
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   //get product by id
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put("/api/products/:id", async (req, res) => {
//   // update product
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   // add product
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successflly" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// postgres

const express = require("express");
const app = express();
const productRoute = require("./routes/product.route.js");
const salesRoute = require("./routes/sales.route.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute); // This sets the base path for product routes
app.use("/api/sales", salesRoute); // This sets the base path for product routes

app.get("/", (req, res) => {
  res.send("Hello from NODE API Server");
});

// PostgreSQL Connection
const { Pool } = require("pg");
const pool = new Pool({
  user: "jihunpark",
  host: "localhost",
  database: "demo",
  password: "ghoney",
  port: 5433,
});

// Test PostgreSQL Connection
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database!");
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  })
  .catch((err) => {
    console.error("Connection to PostgreSQL failed", err);
  });
