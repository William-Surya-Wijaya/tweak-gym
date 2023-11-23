const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

const MembershipPackage = sequelize.define(
  "MembershipPackage",
  {
    id_memb_pack: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    package_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    package_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    package_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "membershipackage", // Make sure it matches the table name in your SQL definition
    timestamps: false,
  }
);

module.exports = { MembershipPackage };
