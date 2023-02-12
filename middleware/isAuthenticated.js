// function for checking to see if a user is logged in.
const isAuthenticated = (req, res, next) => {
	if (!req.session.logged_in) {
		res.redirect("/login");
	} else {
		next();
	}
};

module.exports = isAuthenticated;
