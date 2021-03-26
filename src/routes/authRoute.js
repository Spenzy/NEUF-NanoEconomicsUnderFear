const express = require("express");
const userController = require("../controllers/user-controller");
const passport = require("passport");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("Auth api functioning");
});
routes.post("/login", userController.loginUser);
routes.get("/logout", userController.logoutUser);
routes.post("/register", userController.registerUser);
routes.get(
  "/verify",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    return res.json({ msg: `Logged in as ${req.user.username}.` });
  }
);

module.exports = routes;