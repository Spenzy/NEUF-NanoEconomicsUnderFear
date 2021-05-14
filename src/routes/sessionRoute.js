const express = require("express");
const passport = require("passport");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("session api functioning");
});


const { saveSession } = require("../controllers/session-controller");
routes.post("/save", saveSession);

module.exports = routes;