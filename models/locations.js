const { Model, DataTypes } = require("sequelize");
const { Locations } = require(".");
const sequelize = require("../config/connections");

class locations extends Model {}

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
			allowNull: false,
		},
		optimal_wind: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		optimal_swell_size: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		optimal_tide: {
			type: DataTypes.STRING,
			allowNull: false,
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
