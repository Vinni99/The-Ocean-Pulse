var isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();


// module.exports = function (router) {
	// get route for search locations
	router.get("/searchLocation", function (req, res) {
		//if logged in render search locations
		if (req.session.logged_in) {
			res.redirect("searchLocation");
			//if not logged in send to login page
		} else {
			res.render("login");
		}
	});
// makes the landing page home page
	router.get("/", function (req, res) {
		console.log("home page");
		res.render("home");
	});
// checks for authentication for search location page.
	router.get("/searchLocation", isAuthenticated, function (req, res) {
		res.render("searchLocation");
	});

	router.get("/login", function (req, res) {
		res.render("login");
	});

	router.get("/signup", function (req, res) {
		res.render("signup");
	});
// };

module.exports = router;
