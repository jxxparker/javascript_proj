const Employee = require("../models/employee.model.js");

// Function to add a new employee
const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get an employee by ID
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.getEmployeeById(id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update an employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEmployee = await Employee.updateEmployee(id, req.body);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete an employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.deleteEmployee(id);
    res.status(200).json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export your functions
module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
