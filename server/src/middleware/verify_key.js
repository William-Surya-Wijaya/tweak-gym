const verifyKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (
    apiKey &&
    apiKey ===
      "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d"
  ) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { verifyKeyMiddleware };
