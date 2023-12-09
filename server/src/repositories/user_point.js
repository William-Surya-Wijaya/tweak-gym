const { UserPoint } = require("../models");

const create_user_point = async (user_id) => {
  await UserPoint.create({
    user_id: user_id,
    point_ammount: 0,
  });
};

module.exports = { create_user_point };