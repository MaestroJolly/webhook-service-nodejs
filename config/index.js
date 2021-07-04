"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 3333;
const env = process.env.NODE_ENV || "development";
const slackHookUrl = process.env.SLACK_HOOK_URL;

module.exports = {
  PORT,
  env,
  slackHookUrl,
};
