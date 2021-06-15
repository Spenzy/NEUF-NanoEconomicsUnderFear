const express = require("express");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("dass api functioning");
});

const passport = require("passport");
const DASS21_DEF = require("../models/dass21")
routes.get("/21",  
  async (req, res) => {
    if(DASS21_DEF)
      res.status(200).send(DASS21_DEF);
    else
      res.status(400).send("DASS21 questionnaire not found")
});

module.exports = routes;