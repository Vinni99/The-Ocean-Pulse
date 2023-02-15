const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Location extends Model {}

Location.init(
	{
		surf_spot: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
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
		modelName: "location",
	}
);

module.exports = Location;
