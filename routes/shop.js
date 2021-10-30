const path = require('path');

const express = require('express');

const rootDir = require("../utils/path");

const router = express.Router();

// Exact matching with get!!!
router.get("/", (req, res, next) => {
    console.log("In another middleware");
    // __dirname holds the absolute path to this project's folder.
    // It automatically builds the path that works both in windows and linux systems.
    res.sendFile(path.join(rootDir, "views", "shop.html" ));
});

module.exports = router;