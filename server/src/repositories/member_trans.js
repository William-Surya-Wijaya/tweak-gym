const { MemberTransaction } = require("../models/");
const { GymSession } = require("../models/");

async function create_transaction(
  TransId,
  UserId,
  MemberPackId,
  NetAmnt,
  PrchsDate
) {
  console.log(TransId);
  await MemberTransaction.create({
    id_transaction_memb: TransId,
    user_id: UserId,
    id_memb_pack: MemberPackId,
    net_amount: NetAmnt,
    purchase_date: PrchsDate,
    transaction_status: "unpaid",
  });
}

async function update_transaction(TransId) {
  await MemberTransaction.update(
    {
      transaction_status: "paid",
    },
    {
      where: {
        id_transaction_memb: TransId,
      },
    }
  );
}

const findUserTransaction = async (user_id) => {
  try {
    const userData = await MemberTransaction.findAll({
      where: {
        user_id: user_id,
      },
      include: [
        {
          model: GymSession,
          attributes: [
            "id_gym_session",
            "session_name",
            "session_start",
            "session_end",
            "session_capacity",
            "session_date",
            "session_price",
          ],
          // Add any additional attributes you want to include from GymSession table
        },
      ],
      raw: true,
    });

    return userData;
  } catch (err) {
    // Handle the error appropriately
    console.error(err);
    throw err;
  }
};


module.exports = {
  create_transaction,
  update_transaction,
  findUserTransaction,
};
