// //mongodb

// const express = require("express");
// const Product = require("../models/product.model.js");
// const router = express.Router();
// const {
//   getAllProducts,
//   getProduct,
//   updateProduct,
//   addProduct,
//   deleteProduct,
// } = require("../controllers/product.controller.js");

// router.get("/", getAllProducts);
// router.get("/:id", getProduct);
// router.put("/:id", updateProduct);
// router.post("/", addProduct);
// router.delete("/:id", deleteProduct);

// module.exports = router;

//postgres
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  updateProduct,
  addProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getAllProducts); // Get all products
router.get("/:id", getProduct); // Get a product by ID
router.put("/:id", updateProduct); // Update a product by ID
router.post("/", addProduct); // Add a new product
router.delete("/:id", deleteProduct); // Delete a product by ID

module.exports = router;
