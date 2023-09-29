const Sequalize = require("sequelize");

const sequalize = new Sequalize("home", "root", "teddyferdian98", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequalize;
