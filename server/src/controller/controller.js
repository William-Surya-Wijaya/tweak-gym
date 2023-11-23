const { addUserData } = require("../repositories/UserRepo");
const {
  createKey,
  sendVerificationEmail,
} = require("../utils/sendEmailVerification");
const bcrypt = require("bcrypt");

const home_page = (req, res) => {
  res.render("home");
};

const post_test = (req, res) => {
  try {
    const { nama, umur } = req.body;
    console.log("berhasil masuk", nama, umur);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};

const register_account = async (req, res) => {
  try {
    const { user_email, user_password, user_name, user_phonenumb } = req.body;
    console.log(user_email, user_password, user_phonenumb, user_name);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user_password, saltRounds);
    const verifToken = createKey(user_email);

    await addUserData(
      user_name,
      user_email,
      hashedPassword,
      user_phonenumb,
      verifToken
    );
    sendVerificationEmail(user_email, verifToken);

    res.status(200).json({ message: "Berhasil Mendaftarkan Akun" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login_account = async (req, res) => {
  try {
    const dataUser = {
      Email: req.body.Email,
    };
    req.session.user = dataUser;

    res.status(200).json({ dataUser });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { home_page, post_test, register_account, login_account };
