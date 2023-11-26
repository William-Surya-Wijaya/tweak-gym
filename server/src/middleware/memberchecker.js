const { findUserId, destroyMembership } = require("../repositories/gymmember");
const { checkUserData } = require("../repositories/UserRepo");

const checkIsMember = async (req, res, next) => {
  const dataUser = await checkUserData(req.body.user_email);
  const dataMember = await findUserId(dataUser.user_id);

  if (dataMember) {
    const currDate = new Date();
    const formatedcurrdate = currDate.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    if (formatedcurrdate > dataMember.member_enddate) {
      await destroyMembership(dataUser.user_id);
    }
  }
  next();
};

module.exports = checkIsMember;
