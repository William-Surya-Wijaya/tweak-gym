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

      raw: true,
    });
    const userBookingHistory = [];
    for (const element of userData) {
      const gymSession = await GymSession.findOne({
        where: {
          id_gym_session: element.id_gym_session,
        },
        raw: true,
      });

      const bookingHistory = {
        id_transaction_book: element.id_transaction_book,
        session_name: gymSession.session_name,
        session_start: gymSession.session_start,
        session_end: gymSession.session_end,
        session_date: gymSession.session_date,
      };
      userBookingHistory.push(bookingHistory);
    }

    return userBookingHistory;
  } catch (err) {
    // Handle the error appropriately
    console.error(err);
    throw err;
  }
};

module.exports = { createBookingTransaction, bookingHistory };
