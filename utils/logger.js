"use strict";

const { env } = require("../config");
const winston = require("winston");

const log_level = env === "development" ? "debug" : "warn";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: log_level,
      format: winston.format.simple(),
    }),
  ],
});

module.exports = logger;
