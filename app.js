const express = require('express');
const path = require('path');

// We import the router object
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// For the parsing of the req.body
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// Middleware to serve static files | Static Middleware
app.use(express.static(path.join(__dirname, "public")));

// The order plays significant role!!!
// Routes that start with /admin, like a filtering mechanich, so we don't have to repeat it in the admin.js.
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// If we don't have any fitting middleware
app.use((req, res, next) => {
    // setHeader, status and send can be changed, but send has to be the last one.
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000);