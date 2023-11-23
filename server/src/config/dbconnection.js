const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tweakgym", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
