const express = require('express');
const path = require('path');

// We import the router object
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// Set the template engine
app.set("view engine", "ejs");
app.set("views", "views");

// For the parsing of the req.body
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// Middleware to serve static files | Static Middleware
app.use(express.static(path.join(__dirname, "public")));

// The order plays significant role!!!
// Routes that start with /admin, like a filtering mechanism, so we don't have to repeat it in the admin.js.
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// If we don't have any fitting middleware
app.use((req, res, next) => {
    // setHeader, status and send can be changed, but send has to be the last one.
    res.status(404).render("404.ejs", {pageTitle: "Page Not Found"});
})

app.listen(3000);