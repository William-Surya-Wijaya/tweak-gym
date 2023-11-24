const { User } = require("../models/");

async function addUserData(
  NamaUser,
  EmailUser,
  PasswordUser,
  NoTelpUser,
  VerificationToken
) {
  try {
    await User.create({
      user_name: NamaUser,
      user_email: EmailUser,
      user_password: PasswordUser,
      user_phonenumb: NoTelpUser,
      veriftoken: VerificationToken,
      user_isverified: 0,
      user_role: 0,
    });
  } catch (err) {
    console.error(err);
  }
}

async function checkUserData(EmailUser, Password) {
  try {
    const dataUser = await User.findOne({
      where: {
        user_email: EmailUser,
      },
      raw: true,
    });

    if (dataUser) {
      return dataUser;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { addUserData, checkUserData };
