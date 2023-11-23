const { checkUserData } = require("../repositories/UserRepo");

const dataUserLogin = async (req, res, next) => {
  const dataUser = await checkUserData();
  if (dataUser) {
    next();
  } else {
    res.status(400).json({ message: "Akun tidak ditemukan" });
  }
};

module.exports = {
  dataUserLogin,
};
