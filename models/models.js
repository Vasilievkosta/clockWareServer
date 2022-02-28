const sequelize = require('../bd')
const {
	DataTypes
} = require('sequelize')

const Master = sequelize.define('master', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		// defaultValue: 'masterok'
	},
	masterDate: {
		type: DataTypes.DATE,
		// defaultValue: DataTypes.NOW
	},
})

const City = sequelize.define('city', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
})

const Rate = sequelize.define('rate', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	rate: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
})

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		unique: true
	},
})

const Order = sequelize.define('order', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
})

const Size = sequelize.define('size', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
})

// City.hasMany(Master)
// Master.belongsTo(City)

// Rate.hasMany(Master)
// Master.belongsTo(Rate)

User.hasMany(Order)
Order.belongsTo(User)

// Master.hasMany(Order)
// Order.belongsTo(Master)

Size.hasMany(Order)
Order.belongsTo(Size)

module.exports = {
	Master,
	City,
	Rate,
	User,
	Order,
	Size
}