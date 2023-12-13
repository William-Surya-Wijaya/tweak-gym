const { UserPoint } = require("../models");

const create_user_point = async (user_id) => {
  await UserPoint.create({
    user_id: user_id,
    point_ammount: 0,
  });
};

const findPointId = async (user_id) => {
  const dataPoint = await UserPoint.findOne({
    where: {
      user_id: user_id,
    },
    raw: true,
  });

  return dataPoint;
};

const update_user_point = async (id_point, gross_amount) => {
  try {
    // Mengambil nilai point_ammount sebelumnya
    const existingPoint = await UserPoint.findOne({
      where: {
        id_point: id_point,
      },
      raw: true,
    });

    // Menghitung nilai baru dengan menambahkan gross_amount
    const newPointAmmount = existingPoint.point_ammount + gross_amount;

    // Melakukan update
    await UserPoint.update(
      {
        point_ammount: newPointAmmount,
      },
      {
        where: {
          id_point: id_point,
        },
      }
    );

    console.log(
      `User point updated successfully. New point_ammount: ${newPointAmmount}`
    );
  } catch (error) {
    console.error("Error updating user point:", error);
  }
};

module.exports = { create_user_point, findPointId, update_user_point };