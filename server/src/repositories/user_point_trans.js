const { PointTransaction } = require("../models/");

async function create_point_transaction(
  TransId,
  UserId,
  PointId,
  NetAmnt,
  PrchsDate,
  PointAmount
) {
  console.log(TransId);
  await PointTransaction.create({
    id_transaction_point: TransId,
    user_id: UserId,
    id_point: PointId,
    ammount_point: PointAmount,
    total_price: NetAmnt,
    purchase_date: PrchsDate,
    transaction_status: "unpaid",
  });
}

module.exports = { create_point_transaction };
