const { BookingTransaction } = require("../models");

const createBookingTransaction = async (
  id_trans_book,
  user_id,
  id_gym_session,
  net_ammount,
  purchase_date,
  trans_status
) => {
  await BookingTransaction.create({
    id_transaction_book: id_trans_book,
    user_id: user_id,
    id_gym_session: id_gym_session,

    net_amount: net_ammount,
    purchase_date: purchase_date,

    transaction_status: trans_status,
  });
};

module.exports = { createBookingTransaction };
