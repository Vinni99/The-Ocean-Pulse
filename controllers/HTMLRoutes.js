var isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();

// module.exports = function (router) {
// get route for search locations
router.get("/locations", function (req, res) {
	//if logged in render search locations
	if (req.session.logged_in) {
		res.render("locations");
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
router.get("/locations", isAuthenticated, function (req, res) {
	res.render("locations");
});

router.get("/login", function (req, res) {
	res.render("login");
});

router.get("/signup", function (req, res) {
	res.render("signup");
});
// };



module.exports = router;
