const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

const GymSession = sequelize.define(
  "GymSession",
  {
    id_gym_session: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    session_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    session_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    session_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    session_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    session_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "gym_session", // Make sure it matches the table name in your SQL definition
    timestamps: false,
  }
);

module.exports = GymSession;
