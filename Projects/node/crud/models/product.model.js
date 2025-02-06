// //mongodb

// const mongoose = require("mongoose");

// const ProductSchema = mongoose.Schema(
//   {
//     name: { type: String, required: [true, "Please enter product name"] },
//     quantity: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     price: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     image: {
//       type: String,
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", ProductSchema);
// module.exports = Product;

//postgres
const { Pool } = require("pg");

// Create a new pool instance for PostgreSQL connection
const pool = new Pool({
  user: "jihunpark",
  host: "localhost",
  database: "demo",
  password: "ghoney",
  port: 5433,
});

// Function to get all products
const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

// Function to get a product by ID
const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0]; // Return the first row
};

// Function to add a new product
const addProduct = async (productData) => {
  const { name, quantity, price, image, category } = productData;
  const result = await pool.query(
    "INSERT INTO products (name, quantity, price, image, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, quantity, price, image, category]
  );
  return result.rows[0]; // Return the created product
};

// Function to update a product
const updateProduct = async (id, productData) => {
  const { name, quantity, price, image } = productData;
  const result = await pool.query(
    "UPDATE products SET name = $1, quantity = $2, price = $3, image = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *",
    [name, quantity, price, image, id]
  );
  return result.rows[0]; // Return the updated product
};

// Function to delete a product
const deleteProduct = async (id) => {
  const result = await pool.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0]; // Return the deleted product
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
