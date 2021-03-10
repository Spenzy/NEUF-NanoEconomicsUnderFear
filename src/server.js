var express = require("express");
var passport = require("passport");
var mongoose = require("mongoose");
var config = require("./config/config");
var port = process.env.PORT || 3000;

var app = express();

app.use(express.json.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res) {
  return res.send("");
});

var routes = require("./routes.js");
app.use("/api", routes);

app.listen(port);
