const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.log('error', err.message, err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;