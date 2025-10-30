const fs = require('fs');
const path = require('path');

const logFile = process.env.LOG_FILE || 'events.log';
const logFilePath = path.join(__dirname, '..', logFile);

const log = (level, message, data) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${level.toUpperCase()}: ${message} ${data ? JSON.stringify(data) : ''}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
};

module.exports = {
  log,
};