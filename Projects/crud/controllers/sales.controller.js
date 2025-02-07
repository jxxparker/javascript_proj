const Sale = require("../models/sales.model.js");

// Function to add a new sale
const addSale = async (req, res) => {
  try {
    const sale = await Sale.createSale(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all sales
const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.getAllSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a sale by ID
const getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await Sale.getSaleById(id);
    if (!sale) return res.status(404).json({ message: "Sale not found" });
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get sales by employee ID
const getSalesByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const sales = await Sale.getSalesByEmployeeId(employeeId);
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get sales by product ID
const getSalesByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const sales = await Sale.getSalesByProductId(productId);
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export your functions
module.exports = {
  addSale,
  getAllSales,
  getSaleById,
  getSalesByEmployeeId,
  getSalesByProductId,
};
