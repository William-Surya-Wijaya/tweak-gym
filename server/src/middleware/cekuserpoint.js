const { findPointId } = require("../repositories/user_point");

const cekUserPoints = async (req, res, next) => {
  const dataPoint = await findPointId(req.session.user.user_id);
  const ammount_point = req.body.net_amount;
  if (dataPoint.point_ammount >= ammount_point) {
    next();
  } else {
    res.status(400).json({ message: "Point tidak mencukupi" });
  }
};

module.exports = { cekUserPoints };