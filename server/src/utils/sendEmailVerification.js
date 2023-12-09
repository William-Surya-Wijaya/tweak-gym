const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

function createKey(email) {
  const secretKey = "TEDxJadiin";
  const userId = email;
  const token = jwt.sign({ userId }, secretKey);
  return token;
}

function sendVerificationEmail(toEmail, token) {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., 'Gmail'
    auth: {
      user: "jadiin.co@gmail.com",
      pass: "zgqkvvjeucxhxyyd",
    },
  });

  const mailOptions = {
    from: "jadiin.co@gmail.com",
    to: toEmail,
    subject: "Email Verification",
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px; text-align: center;">
      <h1 style="color: #333;">Selamat datang di TWEAK GYM </h1>
      <p style="font-size: 18px; color: #555;">Terima kasih telah mendaftar. Untuk melanjutkan, silakan verifikasi alamat email Anda.</p>
      <a href="http://localhost:3100/verify?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; font-size: 16px; border-radius: 5px;">Verifikasi Email</a>
      <p style="font-size: 14px; color: #777;">Jika Anda mengalami masalah saat mengklik tombol di atas, salin dan tempel tautan berikut ini di peramban web Anda:</p>
      <p style="font-size: 14px; color: #777;">http://localhost:3100/verify?token=${token}</p>
      <p style="font-size: 14px; color: #777;">Terima kasih,</p>
      <p style="font-size: 14px; color: #777;">Tim Tweak Gym</p>
    </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendVerificationEmail, createKey };
