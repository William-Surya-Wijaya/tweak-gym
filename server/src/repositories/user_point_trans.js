const { PointTransaction } = require("../models/");

async function create_point_transaction(
  TransId,
  UserId,
  PointId,
  NetAmnt,
  PrchsDate
) {
  console.log(TransId);
  await PointTransaction.create({
    id_transaction_point: TransId,
    user_id: UserId,
    id_point: PointId,
    ammount_point: NetAmnt,
    total_price: NetAmnt,
    purchase_date: PrchsDate,
    transaction_status: "unpaid",
  });
}

const find_order = async (TransId) => {
  const dataTrans = PointTransaction.findOne({
    where: {
      id_transaction_point: TransId,
      transaction_status: "paid",
    },
    raw: true,
  });
  return dataTrans;
};
async function update_transaction_point(TransId) {
  await PointTransaction.update(
    {
      transaction_status: "paid",
    },
    {
      where: {
        id_transaction_point: TransId,
      },
    }
  );
}
module.exports = {
  create_point_transaction,
  find_order,
  update_transaction_point,
};
