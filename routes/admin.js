const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");
// router is like a mini express
const router = express.Router();

// It will executed for every request | Works for all the http methods.
// We pass a reference to the functions that needs to be executed whenever a request is made to admin/add-product
router.get("/add-product", productsController.getAddProduct);

// Will fire only for post requests (get, patch, put)
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
