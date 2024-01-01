const { BookingTransaction } = require("../models");
const { GymSession } = require("../models");

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
const bookingHistory = async (user_id) => {
  try {
    const userData = await BookingTransaction.findAll({
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

module.exports = { createBookingTransaction, bookingHistory };
