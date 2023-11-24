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

module.exports = create_transaction;
