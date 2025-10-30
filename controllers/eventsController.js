const logger = require('../utils/logger');

exports.logEvent = (req, res, next) => {
  const eventData = req.body;

  if (!eventData || Object.keys(eventData).length === 0) {
    return res.status(400).json({ error: 'Event data is required.' });
  }

  try {
    logger.log('info', 'Received event', eventData);
    res.status(201).json({ message: 'Event logged successfully.' });
  } catch (error) {
    next(error);
  }
};