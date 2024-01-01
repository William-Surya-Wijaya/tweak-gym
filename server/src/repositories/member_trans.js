const { MemberTransaction } = require("../models/");

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

const findUserTransaction = async (trans_id) => {
  try {
    const userData = await MemberTransaction.findOne({
      where: {
        id_transaction_memb: trans_id,
      },
      raw: true,
    });
    return userData;
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
};

module.exports = {
  create_transaction,
  update_transaction,
  findUserTransaction,
};
