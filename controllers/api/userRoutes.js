// Adding routes for user login

// post route signup route

const router = require("express").Router();
const { User } = require("../../models/user");

//post route for creating a login
router.post("/login", async (req, res) => {
	try {
		const dbUserData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(dbUserData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
//post route for login
router.post("/login", async (req, res) => {
	try {
		//find user by email
		const userData = await User.findOne({ where: { email: req.body.email } });
		//if none exist. render message.
		if (!userData) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}
		//check password against body.password
		const validPassword = await userData.checkPassword(req.body.password);
		//if not valid, render error message
		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}
		//save the session so that a user is logged in.
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: "You are now logged in!" });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

//post route for logging out
router.post("/logout", (req, res) => {
	if (req.session.logged_in) {
		// Remove the session
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
