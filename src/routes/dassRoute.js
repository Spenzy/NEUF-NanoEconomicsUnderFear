const express = require("express");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("Auth api functioning");
});

const passport = require("passport");
const { persistDASS } = require("../controllers/dass21-persist");
const DASS21_DEF = require("../models/dass21")
routes.get("/21",  async (req, res) => {
    res.status(200).send(DASS21_DEF);
  });

module.exports = routes;