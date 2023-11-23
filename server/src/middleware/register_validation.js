const { body, validationResult } = require("express-validator");
const { checkDuplicate } = require("../utils/login-register");

const registrationValidationRules = [
  body("user_email")
    .custom(async (value) => {
      console.log(">> EMAIL ", value);
      const duplicate = await checkDuplicate(value);
      if (duplicate) {
        throw new Error("Email sudah sudah terdaftar!");
      }
      return true;
    })
    .isEmail()
    .withMessage("Email tidak valid!"),

  body("user_password")
    .isLength({ min: 6 })
    .withMessage("Password harus berisi minimal 6 karakter!")
    .custom(async (value) => {
      console.log("Password", value);
      const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/;
      if (!regex.test(value)) {
        throw new Error(
          "Password harus mengandung minimal satu huruf kapital dan satu simbol!"
        );
      }
      return true;
    }),
];

const validateRegistration = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports = {
  registrationValidationRules,
  validateRegistration,
};
