const path = require('path');

const express = require('express');

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

// Exact matching with get!!!
router.get("/", (req, res, next) => {
    const products = adminData.products;
    // Uses the default template engine and we don't need to construct the filepath.
    res.render("shop.ejs", {products: products, pageTitle:"My Shop", path: "/"});
});

module.exports = router;