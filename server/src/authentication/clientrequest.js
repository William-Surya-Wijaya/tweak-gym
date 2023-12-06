const verifyUserToken = (req, res, next) => {

  const clientToken = req.session.user.token;
  if (clientToken) {
    next();
  } else {
    res.status(401).json({ message: "Token tidak valid" });
  }
};

module.exports = { verifyUserToken };
