const express = require("express");
const controller = require("./controller");
const validator = require("../middleware/register_validation.js");
const verifyRecaptcha = require("../middleware/verifyReCaptcha.js");
const { dataUserLogin } = require("../middleware/logincheck.js");
const { verifyUserToken } = require("../authentication/clientrequest.js");
const verifyKeyMiddleware = require("../middleware/verify_key");
const checkIsMember = require("../middleware/memberchecker.js");

const router = express.Router();

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // batas permintaan per IP
});

// GET Route
router.get("/", limiter, controller.home_page);
router.get("/verify", controller.verify_email);

// POST Route
router.post("/test", limiter, verifyKeyMiddleware, controller.post_test);
router.post(
  "/register-tweak-account",
  limiter,
  verifyKeyMiddleware,
  verifyRecaptcha,
  validator.registrationValidationRules,
  validator.validateRegistration,
  controller.register_account
);
router.post(
  "/login-tweak-account",
  limiter,
  verifyKeyMiddleware,
  //verifyRecaptcha,
  dataUserLogin,
  checkIsMember,
  controller.login_account
);
router.post(
  "/register-tweak-member",
  limiter,
  verifyKeyMiddleware,
  verifyUserToken,
  controller.member_transaction
);

router.post(
  "/transaction-update-payment",
  limiter,
  controller.transaction_update
);
module.exports = router;
