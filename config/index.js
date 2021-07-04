"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 3333;
const env = process.env.NODE_ENV || "development";

module.exports = {
  PORT,
  env,
};
