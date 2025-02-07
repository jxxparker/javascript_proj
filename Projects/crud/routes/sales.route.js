const express = require("express");
const router = express.Router();
const {
  addSale,
  getAllSales,
  getSaleById,
  getSalesByEmployeeId,
  getSalesByProductId,
} = require("../controllers/sales.controller.js");

router.post("/", addSale); // Add a new sale
router.get("/", getAllSales); // Get all sales
router.get("/:id", getSaleById); // Get a sale by ID
router.get("/employee/:employeeId", getSalesByEmployeeId); // Get sales by employee ID
router.get("/product/:productId", getSalesByProductId); // Get sales by product ID

module.exports = router;
