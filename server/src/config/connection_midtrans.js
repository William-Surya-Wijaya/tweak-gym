const midtransClient = require("midtrans-client");
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-6D_jBTipqRuc3aENX60JOKb3",
  clientKey: "SB-Mid-client-ICLHF4MyunAuPUjZ",
});
module.exports = { snap };
