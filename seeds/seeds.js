const sequelize = require('../config/connections');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
console.log('\n----- DATABASE SEEDED -----\n')
  process.exit(0);

};

seedDatabase();