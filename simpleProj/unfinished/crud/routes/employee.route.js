const express = require("express");
const router = express.Router();

const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller.js");

router.post("/", addEmployee); // Add a new employee
router.get("/", getAllEmployees); // Get all employees
router.get("/:id", getEmployeeById); // Get an employee by ID
router.put("/:id", updateEmployee); // Update an employee
router.delete("/:id", deleteEmployee); // Delete an employee

module.exports = router;
