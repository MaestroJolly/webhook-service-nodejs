"use strict";

const { env, PORT } = require("./config");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const morgan = require("morgan");

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

app.get("*", (req, res) => {
  res.json({
    app: "This webhook app is up and listening for hook data.",
    version: "1.0",
  });
});

app.post("/events", (req, res) => {
  const data = req.body;
  res.json(true);
});

app.listen(PORT, () => {
  logger.info(`app is running on ${PORT}`);
});
