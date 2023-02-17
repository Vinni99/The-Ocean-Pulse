const router = require("express").Router();
const { Locations } = require("../../models");
const isAuthenticated = require("../../middleware/isAuthenticated");

router.post("/locations", isAuthenticated, async (req, res) => {
	try {
		const newLocation = await Locations.create({
			...req.body,
			user_id: req.session.user_id,
		});

		res.status(200).json(newLocation);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get("/", async function (req, res) {
	try {
		const locationData = await Locations.findAll();
		res.json(locationData);
	} catch (error) {
		res.json(error);
	}
});


module.exports = router;

