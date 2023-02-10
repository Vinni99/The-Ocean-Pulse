// add routes for HTML

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
	// get route for search locations
	app.get("/searchLocation", function (req, res) {
		//if logged in render search locations
		if (req.session.logged_in) {
			res.redirect("searchLocation");
			//if not logged in send to login page
		} else {
			res.render("login");
		}
	});
// makes the landing page home page
	app.get("/", function (req, res) {
		res.render("home");
	});
// checks for authentication for search location page.
	app.get("/searchLocation", isAuthenticated, function (req, res) {
		res.render("searchLocation");
	});
};
