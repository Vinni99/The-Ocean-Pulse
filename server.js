const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//setting the use of express
const app = express();
const PORT = process.env.PORT || 3306;

// if we need helpers const hbs = exphbs.create({helpers});

//for adding login session with Sequelize Store
const sess = {
	secret: "Secret Session",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

//running our Express app
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening to the PORT"));
});
