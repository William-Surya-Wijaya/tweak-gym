const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const User = require("./User");
const MembershipPackage = require("./MembershipPackage");

const MemberTransaction = sequelize.define(
  "MemberTransaction",
  {
    id_transaction_memb: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
    id_memb_pack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MembershipPackage,
        key: "id_memb_pack",
      },
    },
    net_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    transaction_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "member_transaction",
    timestamps: false,
  }
);

module.exports = MemberTransaction;
