const verifyUserToken = (req, res, next) => {

  const clientToken = req.session.user.token;
  console.log(clientToken);
  if (clientToken) {
    next();
  } else {
    res.status(401).json({ message: "Token tidak valid" });
  }
};

module.exports = { verifyUserToken };
