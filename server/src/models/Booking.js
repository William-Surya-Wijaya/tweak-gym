const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const User = require("./User");
const BookingTransaction = require("./BookingTransaction");

const Booking = sequelize.define(
  "Booking",
  {
    id_booking: {
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
    booking_token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    token_isvalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_transaction_book: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: BookingTransaction,
        key: "id_transaction_book",
      },
    },
  },
  {
    tableName: "booking",
    timestamps: false,
  }
);

module.exports = Booking;
