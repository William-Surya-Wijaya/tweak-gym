const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const { User } = require("./");

const UserPoint = sequelize.define(
  "UserPoint",
  {
    id_point: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
    point_ammount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "user_point",
    timestamps: false,
  }
);

module.exports = { UserPoint };
