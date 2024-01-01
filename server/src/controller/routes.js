const express = require("express");
const controller = require("./controller");
const validator = require("../middleware/register_validation.js");
const { dataUserLogin } = require("../middleware/logincheck.js");
const { verifyUserToken } = require("../authentication/clientrequest.js");
const verifyKeyMiddleware = require("../middleware/verify_key");
const checkIsMember = require("../middleware/memberchecker.js");
const rateLimit = require("express-rate-limit");

class AppRouter {
  constructor() {
    this.router = express.Router();
    this.initializeMiddleware();
    this.initializeRoutes();
  }

  initializeMiddleware() {
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 menit
      max: 100, // batas permintaan per IP
    });

    this.router.use("/get-gym-session", limiter, verifyKeyMiddleware);
    this.router.use("/user-member-data", limiter);
    this.router.use("/cek-session", limiter);
    this.router.use("/test", limiter, verifyKeyMiddleware);
    this.router.use("/register-tweak-account", limiter, verifyKeyMiddleware);
    this.router.use("/login-tweak-account", limiter, verifyKeyMiddleware);
    this.router.use("/booking-session", limiter, verifyKeyMiddleware);
    this.router.use("/transaction-update-payment", limiter);
  }

  initializeRoutes() {
    this.router.get("/", controller.home_page);
    this.router.get("/verify", controller.verify_email);
    this.router.get("/get-gym-session", controller.data_gym_session);
    this.router.get("/user-member-data", controller.is_member);
    this.router.get("/cek-session", controller.cek_session);
    this.router.get("/member-package-data", controller.member_product);
    this.router.get("/user-point", controller.get_user_point);
    this.router.get("/history-booking", controller.get_history_booking);

    this.router.post("/test", controller.post_test);
    this.router.post(
      "/register-tweak-account",
      validator.registrationValidationRules,
      validator.validateRegistration,
      controller.register_account
    );
    this.router.post(
      "/login-tweak-account",
      dataUserLogin,
      checkIsMember,
      controller.login_account
    );
    this.router.post("/register-tweak-member", controller.member_transaction);
    this.router.post("/point-transaction", controller.point_transaction);
    this.router.post(
      "/booking-session",
      verifyUserToken,
      controller.book_session
    );
    this.router.post(
      "/transaction-update-payment",
      controller.transaction_update
    );

    this.router.post("/logout", controller.logout);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new AppRouter().getRouter();
