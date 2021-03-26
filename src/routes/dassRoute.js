const express = require("express");

const DASS21_DEF = require("../models/dass21")

const routes = express.Router();
routes.get("/21/", async (req, res) => {
    res.status(200).send(DASS21_DEF);
  });
module.exports = routes;