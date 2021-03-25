const express = require("express");
const userController = require("./controllers/user-controller");
const passport = require("passport");

const routes = express.Router();
routes.get("/", (req, res) => {
  return res.send("Auth api functioning");
});
routes.post("/login", userController.loginUser);
routes.post("/register", userController.registerUser);
routes.get(
  "/auth-check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({ msg: `Logged in as ${req.user.username}.` });
  }
);

module.exports = routes;