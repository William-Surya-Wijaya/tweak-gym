const MemberTransaction = require("../models/MemberTransaction");

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
  try {
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
  } catch (err) {
    return err.message;
  }
}

module.exports = { create_transaction, update_transaction };
