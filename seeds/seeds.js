const sequelize = require("../config/connections");
const { User, Locations } = require("../models");

const userData = require("./userData.json");
const surfSpots = require("./locationData.js");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
console.log('\n----- DATABASE SEEDED -----\n')
  process.exit(0);

	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	await Locations.bulkCreate(surfSpots, {
		individualHooks: true,
		returning: true,
	});
	console.log("user creted");
	process.exit(0);
};

seedDatabase();
