const path = require('path');

const express = require('express');

const rootDir = require("../utils/path");


// router is like a mini express
const router = express.Router();

// It will executed for every request | Works for all the http methods.
// next is a function that has to be executed to allow the request to travel on the next middleware.
// Path that starts with / when using use. Exact matching for the others!!!
// /admin/add-product
router.get("/add-product", (req, res, next) => {
    console.log("In middleware");
    // By default in express the header is text/html | We can change it using setHeader()
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Will fire only for post requests (get, patch, put)
router.post("/add-product", (req, res, next) => {
    // Key is the name and the value we get from the form.
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;