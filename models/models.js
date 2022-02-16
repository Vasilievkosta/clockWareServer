const sequelize = require('../bd')
const { DataTypes } = require('sequelize')

const Master = sequelize.define('master', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull: false},	
	masterDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },	
})

const City = sequelize.define('city', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull: false},	
})

const Rate = sequelize.define('rate', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},	
	rate: {type: DataTypes.STRING, allowNull: false},
})

City.hasMany(Master)
Master.belongsTo(City)

Rate.hasMany(Master)
Master.belongsTo(Rate)

module.exports = {Master, City, Rate}

