exports.get404 = (req, res, next) => {
	// setHeader, status and send can be changed, but send has to be the last one.
	res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
};
