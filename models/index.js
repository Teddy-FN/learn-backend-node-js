// add sequalize
const Sequelize = require("sequelize");

// Import from db
const sequelize = require("../utils/database");

const HomeModels = sequelize.define("home", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = HomeModels;
