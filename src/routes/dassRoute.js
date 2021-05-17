const express = require("express");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("dass api functioning");
});

const passport = require("passport");
const DASS21_DEF = require("../models/dass21")
routes.get("/21",  
  async (req, res) => {
    res.status(200).send(DASS21_DEF);
});

module.exports = routes;