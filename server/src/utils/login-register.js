const { User } = require("../models/");

const checkDuplicate = async (email) => {
  const dataUser = await User.findOne({
    where: { user_email: email },
  });
  if (!dataUser) {
    return false;
  } else {
    return true;
  }
};

module.exports = { checkDuplicate };
