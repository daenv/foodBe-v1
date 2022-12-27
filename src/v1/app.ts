require("dotenv").config();
import { Request, Response } from "express";

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const mongoConnect = require("./config/mongoConnect");

const indexRouter = require("./routes/index");
//user middleware
app.use(helmet());
app.use(morgan("combined"));
// compress responses
app.use(compression());
// add body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.connect(mongoConnect);
app.use(indexRouter);
module.exports = app;
