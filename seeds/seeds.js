const sequelize = require("../config/connections");
const { User } = require("../models");

const userData = require("./userData.json");
// const surfSpots = require("./locationData.js");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	console.log("user creted");
	process.exit(0);
};

seedDatabase();
