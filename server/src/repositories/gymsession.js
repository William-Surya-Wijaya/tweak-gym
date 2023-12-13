const { GymSession } = require("../models");

const get_gym_session = async () => {
  const dataGymSession = await GymSession.findAll({
    raw: true,
  });
  return dataGymSession;
};
const update_capacity = async (id_gym_session) => {
  try {
    const capacity = await GymSession.findOne({
      where: {
        id_gym_session: id_gym_session,
      },
      raw: true,
    });

    // Menghitung nilai baru dengan menambahkan gross_amount
    const newCapacity = capacity.session_capacity - 1;

    // Melakukan update
    await GymSession.update(
      {
        session_capacity: newCapacity,
      },
      {
        where: {
          id_gym_session: id_gym_session,
        },
      }
    );
  } catch (error) {
    console.error("Error updating user point:", error);
  }
};

module.exports = { get_gym_session, update_capacity };
