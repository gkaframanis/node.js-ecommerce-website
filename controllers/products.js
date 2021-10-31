const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
	res.render("add-product.ejs", { pageTitle: "Add a Product", path: "/admin/add-product" });
};

exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect("/");
};

exports.getProducts = async (req, res, next) => {
	// I get the products from the controllers and render when the fetching is done.
	const products = await Product.fetchAll();
    // Uses the default template engine and we don't need to construct the filepath.
    res.render("shop.ejs", { products: products, pageTitle: "My Shop", path: "/" });
};
