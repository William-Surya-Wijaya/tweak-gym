const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const User = require("./User");
const UserPoint = require("./UserPoint");

const PointTransaction = sequelize.define(
  "PointTransaction",
  {
    id_transaction_point: {
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
    id_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserPoint,
        key: "id_point",
      },
    },
    ammount_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    transaction_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "point_transaction",
    timestamps: false,
  }
);

module.exports = PointTransaction;
