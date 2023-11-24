const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");
const User = require("./User");
const MemberTransaction = require("./MemberTransaction");

const GymMember = sequelize.define(
  "GymMember",
  {
    id_member: {
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
    id_transaction_memb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MemberTransaction,
        key: "id_transaction_memb",
      },
    },
    member_startdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    member_enddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    memb_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "gym_member", // Make sure it matches the table name in your SQL definition
    timestamps: false,
  }
);

module.exports = GymMember;
