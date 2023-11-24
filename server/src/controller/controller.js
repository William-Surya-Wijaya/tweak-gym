const { addUserData, checkUserData } = require("../repositories/UserRepo");
const {
  createKey,
  sendVerificationEmail,
} = require("../utils/sendEmailVerification");
const { hashPassword } = require("../utils/hashedpass");
const { createTransactionID } = require("../utils/createtransactionid");
const {
  create_transaction,
  update_transaction,
} = require("../repositories/member_trans");
const { snap } = require("../config/connection_midtrans");
const { getMemberProduct } = require("../repositories/memb_package");
const sha512 = require("js-sha512");

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

    const hashedPassword = await hashPassword(user_password);
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
    const secret_key = createTransactionID();
    const token = await hashPassword(
      req.body.user_email +
        "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d" +
        secret_key
    );
    const dataUser = {
      user_id: req.body.user_id,
      email: req.body.user_email,
      token: token,
    };
    req.session.user = dataUser;

    res.status(200).json({ dataUser, message: "Berhasil login account" });
  } catch (err) {
    console.error(err);
  }
};

const member_transaction = async (req, res) => {
  try {
    const { user_email, memb_package, net_amount, purchase_date } = req.body;
    const dataUser = await checkUserData(user_email);
    console.log();
    const transactionID = createTransactionID();
    console.log(transactionID);

    await create_transaction(
      transactionID,
      dataUser.user_id,
      memb_package,
      net_amount,
      purchase_date
    );
    const parameter = {
      transaction_details: {
        order_id: transactionID,
        gross_amount: net_amount,
      },

      customer_details: {
        first_name: dataUser.Name,
        email: dataUser.Email,
        phone: dataUser.PhoneNumber,
      },
    };
    snap.createTransaction(parameter).then((transaction) => {
      let transactionToken = transaction.token;
      res.status(200).json({ message: "Berhasil", token: transactionToken });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const transaction_update = async (req, res) => {
  try {
    const order_id = req.body.order_id;
    const status_code = req.body.status_code;
    const gross_amount = req.body.gross_amount;
    const serverKey = "SB-Mid-server-6D_jBTipqRuc3aENX60JOKb3O";
    const signature_key = req.body.signature_key;

    const hashed = sha512(order_id + status_code + gross_amount + serverKey);
    if (hashed == signature_key) {
      if (order_id.charAt(0) === "T") {
        await update_transaction(order_id);
      } else if (order_id.charAt(0) === "P") {
        // TODO:: create update_transaction point in the repository
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  home_page,
  post_test,
  register_account,
  login_account,
  member_transaction,
  transaction_update,
};
