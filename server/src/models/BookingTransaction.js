const DataTypes = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const User = require("./User");
const GymSession = require("./GymSession");

const BookingTransaction = sequelize.define(
  "BookingTransaction",
  {
    id_transaction_book: {
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
    id_gym_session: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GymSession,
        key: "id_gym_session",
      },
    },
    net_amount: {
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
    tableName: "booking_transaction",
    timestamps: false,
  }
);

module.exports = BookingTransaction;
