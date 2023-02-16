var isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();
const { Locations, User } = require("../models");

// module.exports = function (router) {
// get route for search locations
// router.get("/locations", isAuthenticated, function (req, res) {
// 	res.render("locations", { logged_in: req.session.logged_in });
// });

router.get("/locations", isAuthenticated, async function (req, res) {
	try {
		const locationData = await Locations.findAll();
		res.render("locations", { logged_in: req.session.logged_in, locationData });
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
	res.render("signup", { logged_in: req.session.logged_in });
});

// router.get('/locations', async (req, res) => {
//   try {
//     // Get all locations and JOIN with user data
//     const locationData = await Location.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

// 	const locations = locationData.map((locations) => locations.get({ plain: true }));

// 	res.render('locations', {
//       locations,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/locations/:id', async (req, res) => {
//   try {
//     const locationData = await Location.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const locations = locationData.get({ plain: true });

//     res.render('specificLocations', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
