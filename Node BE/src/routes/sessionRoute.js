const express = require("express");
const passport = require("passport");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("session api functioning");
});


const sessionController = require("../controllers/session-controller");
routes.post("/save", sessionController.saveSession);
routes.get("/retrieve/:id", sessionController.getSession);
routes.get("/retrieve", sessionController.getAllSessions);

module.exports = routes;