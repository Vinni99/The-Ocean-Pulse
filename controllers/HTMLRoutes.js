var isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();
const { Locations, User } = require("../models");

router.get("/locations", isAuthenticated, async function (req, res) {
	try {
		const locationData = await Locations.findAll();
		console.log(locationData[0].surf_spot);
		const location = locationData.map((location) =>
			location.get({ plain: true })
		);
		res.render("locations", { location, logged_in: req.session.logged_in });
	} catch (error) {
		res.json(error);
	}
});
// makes the landing page home page
router.get("/", function (req, res) {
	console.log("home page");
	// require the page to access the logged_in aspect
	res.render("home", { logged_in: req.session.logged_in });
});
// checks for authentication for search location page.

router.get("/newLocation", isAuthenticated, function (req, res) {
	res.render("newLocation", { logged_in: req.session.logged_in });
});

router.get("/login", function (req, res) {
	res.render("login", { logged_in: req.session.logged_in });
});

router.get("/signup", function (req, res) {
	res.render("signUp", { logged_in: req.session.logged_in });
});


module.exports = router;







