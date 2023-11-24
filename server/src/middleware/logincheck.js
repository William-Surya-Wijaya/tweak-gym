const { checkUserData } = require("../repositories/UserRepo");
const bcrypt = require("bcrypt");

const dataUserLogin = async (req, res, next) => {
  const { user_email, user_password } = req.body;
  const dataUser = await checkUserData(user_email, user_password);
  if (dataUser) {
    if (await bcrypt.compare(user_password, dataUser.user_password)) {
      if (dataUser.user_isverified != 0) {
        next();
      } else {
        res
          .status(400)
          .json({
            message:
              "Akun anda belum di aktivasi, silahkan cek ulang email anda",
          });
      }
    } else {
      res
        .status(400)
        .json({ message: "Email atau password yang anda masukan salah" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Email atau password yang anda masukan salah" });
  }
};

module.exports = {
  dataUserLogin,
};
