const logger = require("../common/logsetting");

const errorhandling = (err, req, res, next) => {
  
  logger.error('global errorhandling', err);
  if (err.name === "UnauthorizedError") {
    return res.sendCommonValue({}, "Unauthorized", 401, 401);
  }

  if (err && err.sql) {
    return res.sendCommonValue({}, 'server error', 500, 500);
  }
  res.sendCommonValue({}, err, 500, 500);
};

module.exports = {
  errorhandling,
};
