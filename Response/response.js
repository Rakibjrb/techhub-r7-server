const sendResponse = (res, statusCode, data, message) => {
  res.send({
    statusCode,
    data,
    message,
  });
};

module.exports = sendResponse;
