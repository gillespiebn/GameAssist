const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const https = require("https");
const fs = require("fs");
const cookieParser = require("cookie-parser");

//PORT
const PORT = process.env.PORT || 5000;
require("dotenv").config();

//initialize express
const app = express();
// body-parser handles form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// express.static serves the public folder as a static directory
const router = express.Router();

app.use(express.static("public"));
app.use(express.static("client/build"));

//cookie parser grabs cookies
app.use(cookieParser())