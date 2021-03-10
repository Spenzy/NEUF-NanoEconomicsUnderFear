var express = require("express"),
  routes = express.Router();
var userController = require("./controller/user-controller");
var passport = require("passport");

routes("/", (req, res) => {
  return res.send("");
});

module.exports(routes);