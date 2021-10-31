const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// Exact matching with get!!!
router.get("/", productsController.getProducts);

module.exports = router;
