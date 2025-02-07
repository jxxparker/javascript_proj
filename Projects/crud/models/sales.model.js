const { Pool } = require("pg"); // Import PostgreSQL client
const pool = new Pool({
  user: "jihunpark",
  host: "localhost",
  database: "demo",
  password: "ghoney",
  port: 5433,
});

// Function to create a new sale
const createSale = async (saleData) => {
  const { employee_id, product_id, quantity, total_amount } = saleData;
  const result = await pool.query(
    "INSERT INTO sales (employee_id, product_id, quantity, total_amount) VALUES ($1, $2, $3, $4) RETURNING *",
    [employee_id, product_id, quantity, total_amount]
  );
  return result.rows[0]; // Return the created sale
};

// Function to get all sales
const getAllSales = async () => {
  const result = await pool.query("SELECT * FROM sales");
  return result.rows; // Return all sales
};

// Function to get a sale by ID
const getSaleById = async (id) => {
  const result = await pool.query("SELECT * FROM sales WHERE id = $1", [id]);
  return result.rows[0]; // Return the sale
};

// Function to get sales by employee ID
const getSalesByEmployeeId = async (employeeId) => {
  const result = await pool.query(
    "SELECT * FROM sales WHERE employee_id = $1",
    [employeeId]
  );
  return result.rows; // Return sales for the specified employee
};

// Function to get sales by product ID
const getSalesByProductId = async (productId) => {
  const result = await pool.query("SELECT * FROM sales WHERE product_id = $1", [
    productId,
  ]);
  return result.rows; // Return sales for the specified product
};

// Export your functions
module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  getSalesByEmployeeId,
  getSalesByProductId,
};
