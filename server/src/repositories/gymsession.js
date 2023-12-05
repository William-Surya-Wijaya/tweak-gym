const { GymSession } = require("../models");

const get_gym_session = async () => {
  const dataGymSession = await GymSession.findAll({
    raw: true,
  });
  return dataGymSession;
};

module.exports = { get_gym_session };
