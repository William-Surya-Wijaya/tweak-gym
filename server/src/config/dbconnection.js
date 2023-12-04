const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "egglesia_tweak_gym",
  "egglesia_tweak_gym",
  "tweakGYMRPL",
  {
    host: "egglesia.com",
    dialect: "mysql",
  }
);

module.exports = { sequelize };
