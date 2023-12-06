const { GymMember } = require("../models");

const getGymData = async () => {
  const dataUser = await GymMember.findAll({ // mengambil data gym member
      raw:true,
  })
  return GymData;
}

const findUserId = async (user_id) => {
  try {
    const dataMember = await GymMember.findOne({
      where: {
        user_id: user_id,
      },
      raw: true,
    });
    if (dataMember) {
      return dataMember;
    } else {
      return false;
    }
  } catch (e) {
    res.send(400).json({ message: e.message });
  }
};



const destroyMembership = async (user_id) => {
  await GymMember.destroy({
    where: {
      user_id: user_id,
    },
  });
};

const createMember = async (user_id, transaction_id, duration) => {
  const member_startdate = new Date();
  const end_date = new Date(member_startdate);
  end_date.setDate(end_date.getDate() + duration);
  const formattedStartDate = member_startdate.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedEndDate = end_date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  console.log(formattedStartDate, formattedEndDate);

  await GymMember.create({
    user_id: user_id,
    id_transaction_memb: transaction_id,
    member_startdate: formattedStartDate,
    member_enddate: formattedEndDate,
    memb_status: "active",
  });
};

module.exports = { findUserId, destroyMembership, createMember, getGymData };
