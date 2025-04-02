const { Pool } = require("pg"); // Import PostgreSQL client
const pool = new Pool({
  user: "jihunpark",
  host: "localhost",
  database: "demo",
  password: "ghoney",
  port: 5433,
});

// Function to create a new employee
const createEmployee = async (employeeData) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    position,
    hire_date,
    salary,
    department_id,
  } = employeeData;
  const result = await pool.query(
    "INSERT INTO employees (first_name, last_name, email, phone, position, hire_date, salary, department_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [
      first_name,
      last_name,
      email,
      phone,
      position,
      hire_date,
      salary,
      department_id,
    ]
  );
  return result.rows[0]; // Return the created employee
};

// Function to get all employees
const getAllEmployees = async () => {
  const result = await pool.query("SELECT * FROM employees");
  return result.rows; // Return all employees
};

// Function to get an employee by ID
const getEmployeeById = async (id) => {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
    id,
  ]);
  return result.rows[0]; // Return the employee
};

// Function to update an employee
const updateEmployee = async (id, employeeData) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    position,
    hire_date,
    salary,
    department_id,
  } = employeeData;
  const result = await pool.query(
    "UPDATE employees SET first_name = $1, last_name = $2, email = $3, phone = $4, position = $5, hire_date = $6, salary = $7, department_id = $8 WHERE id = $9 RETURNING *",
    [
      first_name,
      last_name,
      email,
      phone,
      position,
      hire_date,
      salary,
      department_id,
      id,
    ]
  );
  return result.rows[0]; // Return the updated employee
};

// Function to delete an employee
const deleteEmployee = async (id) => {
  const result = await pool.query(
    "DELETE FROM employees WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0]; // Return the deleted employee
};

// Export your functions
module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
