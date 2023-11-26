const DataTypes = require("sequelize");
const { sequelize } = require("../config/dbconnection");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_phonenumb: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    veriftoken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_isverified: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "user", // Make sure it matches the table name in your SQL definition
    timestamps: false,
  }
);

module.exports = User;
