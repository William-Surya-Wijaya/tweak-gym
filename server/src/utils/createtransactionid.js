const createTransactionID = (transaction_sype) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const milliseconds = now.getMilliseconds().toString().padStart(3, "0");

  return (transactionID = `${transaction_sype}${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`);
};

module.exports = {
  createTransactionID,
};
