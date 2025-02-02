const logger = require("../utils/log.js");

const log = (req, res, next) => {
  const start = new Date();

  next();

  const ms = new Date() - start;
  logger.info(
    `${req.method} ${req.originalUrl}. Status: ${res.statusCode}. Duration: ${ms} ms`
  );
};

module.exports = log;
