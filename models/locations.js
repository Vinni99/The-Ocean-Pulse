const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Locations extends Model {}

Locations.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		surf_spot: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		optimal_swell_direction: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		optimal_wind: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		optimal_swell_size: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		optimal_tide: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "locations",
	}
);

module.exports = Locations;
