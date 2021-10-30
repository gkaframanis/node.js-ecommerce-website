const express = require('express');
const path = require('path');
const hbs = require("express-handlebars");

// We import the router object
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// Set the template engine

// Express-handlebars: If the template engine is registered to initialize the engine
app.engine("hbs", hbs({extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts",}));
app.set("view engine", hbs);
app.set("views", "views");

// Pug
// app.set("view engine", "pug");
// app.set("views", "views");  // views is the default, so here it isn't really needed.

// For the parsing of the req.body
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// Middleware to serve static files | Static Middleware
app.use(express.static(path.join(__dirname, "public")));

// The order plays significant role!!!
// Routes that start with /admin, like a filtering mechanich, so we don't have to repeat it in the admin.js.
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// If we don't have any fitting middleware
app.use((req, res, next) => {
    // setHeader, status and send can be changed, but send has to be the last one.
    res.status(404).render("404.hbs", {pageTitle: "Page Not Found"});
})

app.listen(3000);