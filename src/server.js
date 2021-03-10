const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/config");
var port = process.env.PORT || 3000;

mongoose.connect(config.db);
var app = express();

app.use(express.json());

app.get("/", function (req, res) {
  return res.send("");
});

var routes = require("./routes.js");
const { db } = require("./config/config");
app.use("/api", routes);

app.listen(port);
