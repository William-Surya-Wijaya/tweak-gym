const { Booking } = require("../models/");

const create_booking = async (
  id_user,
  booking_token,
  token_isvalid,
  id_transaction_booking
) => {
  await Booking.create({
    user_id: id_user,
    booking_token: booking_token,
    token_isvalid: token_isvalid,
    id_transaction_book: id_transaction_booking,
  });
};

const getBookingMembers = async (user_id) => {
  const bookingData = await Booking.findAll({
    where: {
      user_id: user_id,
    },
    raw: true,
  });
  return bookingData;
};

module.exports = { create_booking, getBookingMembers };
