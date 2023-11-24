const { MembershipPackage } = require("../models");

async function getMembershipPackage() {
  const dataMemberpackage = await MembershipPackage.findAll({ raw: true });
  return dataMemberpackage;
}
async function getMemberProduct(memb_package) {
  const dataMemberpackage = await MembershipPackage.findOne({
    where: {
      id_memb_pack: memb_package,
    },
    raw: true,
  });
  return dataMemberpackage;
}

module.exports = {
  getMembershipPackage,
  getMemberProduct,
};
