const {
  addUserData,
  checkUserData,

  checkUserToken,
} = require("../repositories/UserRepo");
const {
  createKey,
  sendVerificationEmail,
} = require("../utils/sendEmailVerification");
const { hashPassword } = require("../utils/hashedpass");
const { createTransactionID } = require("../utils/createtransactionid");
const {
  create_transaction,
  update_transaction,
  findUserTransaction,
} = require("../repositories/member_trans");
const { snap } = require("../config/connection_midtrans");
const {
  create_user_point,
  findPointId,
  update_user_point,
  update_booking_point,
} = require("../repositories/user_point");
const {
  getMemberProduct,
  getMembershipPackage,
} = require("../repositories/memb_package");
const { createMember, findUserId } = require("../repositories/gymmember");
const {
  get_gym_session,
  update_capacity,
} = require("../repositories/gymsession");
const sha512 = require("js-sha512");
const {
  create_point_transaction,
  find_order,
  update_transaction_point,
} = require("../repositories/user_point_trans");
const { createBookingTransaction } = require("../repositories/booktrans");
const { create_booking } = require("../repositories/gymbook");

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

    const userdata = await checkUserData(user_email);
    console.log(userdata.user_id);
    await create_user_point(userdata.user_id);

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

    const data = await checkUserData(req.body.user_email);
    console.log(req.body.user_email);
    const dataUser = {
      user_id: data.user_id,
      user_name: data.user_name,
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
    const email = req.session.user.email;
    const { memb_package, net_amount, purchase_date } = req.body;

    console.log("HAHA", email);
    const dataUser = await checkUserData(email);
    console.log(dataUser);
    const transactionID = createTransactionID("T");
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

const point_transaction = async (req, res) => {
  try {
    const user_email = req.session.user.email;
    const { net_ammount, purchase_date } = req.body;
    const dataUser = await checkUserData(user_email);
    console.log(dataUser);
    const transactionID = createTransactionID("P");
    const pointId = await findPointId(dataUser.user_id);
    console.log(pointId);
    await create_point_transaction(
      transactionID,
      dataUser.user_id,
      pointId.id_point,
      net_ammount,
      purchase_date
    );
    const parameter = {
      transaction_details: {
        order_id: transactionID,
        gross_amount: net_ammount,
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

const member_product = async (req, res) => {
  try {
    const memb_package_data = await getMembershipPackage();
    res.status(200).json({ memb_package_data });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

const transaction_update = async (req, res) => {
  try {
    const order_id = req.body.order_id;
    const status_code = req.body.status_code;
    const gross_amount = req.body.gross_amount;
    const signature_key = req.body.signature_key;
    const transaction_status = req.body.transaction_status;
    const serverKey = "SB-Mid-server-6D_jBTipqRuc3aENX60JOKb3";

    const hashed = sha512(order_id + status_code + gross_amount + serverKey);
    console.log(order_id, status_code, gross_amount, serverKey);
    if (hashed == signature_key) {
      if (transaction_status === "settlement") {
        if (order_id.charAt(0) === "T") {
          await update_transaction(order_id);
          const dataTransaction = await findUserTransaction(order_id);
          const memb_package_data = await getMemberProduct(
            dataTransaction.id_memb_pack
          );
          await createMember(
            dataTransaction.user_id,
            order_id,
            memb_package_data.package_duration
          );
        } else if (order_id.charAt(0) === "P") {
          // TODO:: create update_transaction point in the repository
          console.log(order_id);
          await update_transaction_point(order_id);
          const transactionData = await find_order(order_id);
          console.log(transactionData);
          await update_user_point(
            transactionData.id_point,
            transactionData.ammount_point
          );
        }
      }
    }

    res.status(200).json({ message: transaction_status });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const verify_email = async (req, res) => {
  try {
    // TODO : create a verification token through req.query
    const { token } = req.query;
    await checkUserToken(token);

    res.status(200).json({ message: "berhasil" });
  } catch (err) {
    res.status(400).json({ message: "gagal verifikasi" });
  }
};

const data_gym_session = async (req, res) => {
  try {
    console.log(req.session.user);
    const dataGymSession = await get_gym_session();
    const { user_id } = req.session.user;
    const isMember = await findUserId(user_id);
    console.log(isMember);
    if (isMember) {
      res.status(200).json({ dataGymSession, isMember });
    } else {
      res.status(200).json({ dataGymSession });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const is_member = async (req, res) => {
  try {
    const isMember = await findUserId(req.session.user.user_id);
    console.log(isMember);
    if (isMember) {
      res.status(200).json({ message: isMember });
    } else {
      res.status(200).json({ message: isMember });
    }
  } catch (error) {
    res.status(404).json({ message: "false" });
  }
};

const book_session = async (req, res) => {
  try {
    const user_id = req.session.user;
    const { id_gym_session, net_amount, purchase_date, transaction_status } =
      req.body;

    const transBook = createTransactionID("GBT");
    console.log(
      transBook,
      user_id,
      id_gym_session,
      net_amount,
      purchase_date,
      transaction_status
    );
    // await createBookingTransaction(
    //   transBook,
    //   user_id,
    //   id_gym_session,
    //   net_amount,
    //   purchase_date,
    //   transaction_status
    // );
    // const pointData = findPointId(user_id);
    // await update_booking_point(pointData.id_point, net_amount);
    // await update_capacity(id_gym_session);
    // const tokenBook = createTransactionID("TOKENBOOK");
    // await create_booking(user_id, tokenBook, 0, transBook);
    res.status(200).json({ message: "Berhasil melakukan booking" });
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

const cek_session = async (req, res) => {
  try {
    const { email } = req.session.user;
    const dataUser = await checkUserData(email);
    if (dataUser) {
      res.status(200).json({ message: "session valid", dataUser });
    } else {
      res.status(404).json({ message: "Session invalid" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  home_page,
  post_test,
  register_account,
  login_account,
  member_transaction,
  transaction_update,
  verify_email,
  point_transaction,
  data_gym_session,
  book_session,
  is_member,
  cek_session,
  member_product
};
