const axios = require("axios");
const querystring = require("querystring");

const verifyRecaptcha = async (req, res, next) => {
  const { recaptchaValue } = req.body;

  if (!recaptchaValue) {
    // Jika reCAPTCHA tidak dicentang, kirim respons kesalahan
    return res.status(400).json({ error: "reCAPTCHA not checked" });
  }

  try {
    const recaptchaSecretKey = "6Ld_wQ8pAAAAAD-RJv6RssAsK7qH4AP3salaHaRH";
    const recaptchaVerificationURL =
      "https://www.google.com/recaptcha/api/siteverify";

    // Kirim permintaan ke Google untuk memverifikasi reCAPTCHA
    const verificationResponse = await axios.post(
      recaptchaVerificationURL,
      querystring.stringify({
        secret: recaptchaSecretKey,
        response: recaptchaValue,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Cek hasil verifikasi
    if (verificationResponse.data.success) {
      // Jika reCAPTCHA valid, lanjutkan ke middleware atau handler berikutnya
      next();
    } else {
      // Jika verifikasi gagal, kirim respons kesalahan
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = verifyRecaptcha;
