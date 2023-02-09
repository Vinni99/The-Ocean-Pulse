// add routes for HTML

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
	app.get("/", function (req, res) {
		if (req.user) {
			res.redirect("/home");
		} else {
			res.render("signup", { js: ["signup.js"] });
		}
	});

	app.get("/login", function (req, res) {
		if (req.user) {
			res.redirect("/home");
		} else {
			res.render("login", { js: ["login.js"] });
		}
	});

	app.get("/home", isAuthenticated, function (req, res) {
		res.render("home", { js: ["home.js"] });
	});

	app.get("/searchLocals", isAuthenticated, function (req, res) {
		res.render("searchLocals", { js: ["locations.js"] });
	});
};
