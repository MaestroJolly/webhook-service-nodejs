"use strict";

const { env, PORT, slackHookUrl } = require("./config");
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const logger = require("./utils/logger");
const morgan = require("morgan");
const requestIp = require("request-ip");

// cross-origin configuration
const corsOptions = {
  methods: "POST, OPTIONS",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization",
  optionsSuccessStatus: 200, // some legacy browsers choke on 204
};

// middlewares
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json({ limit: "10mb" }));

/**
 *  wildcard get endpoint to return all
 *  get calls to return the response below.
 */
app.get("*", (req, res) => {
  res.json({
    app: "This webhook app is up and listening for hook data.",
    version: "1.0",
  });
});

/**
 * hook endpoint integrated with slack to post
 * hook data as notification on slack.
 */
app.post("/events", async (req, res) => {
  const data = {
    user_agent: req.headers["user-agent"],
    client_request_ip: requestIp.getClientIp(req),
    request_date: new Date(),
    hook_data: req.body,
  };

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: { text: "```" + JSON.stringify(data, null, 2) + "```" },
    url: slackHookUrl,
  };

  try {
    await axios(options);
    res.json({ status: "success", message: true });
  } catch (error) {
    logger.error(
      JSON.stringify({ stack_trace: error.stack, error_message: error.message })
    );
    res.status(400).send({ status: "error", message: error.message });
  }
});

app
  .listen(PORT, () => {
    logger.info(`app is running on ${PORT}.`);
  })
  .on("error", (err) => {
    logger.error(err);
    process.exit(1);
  });
