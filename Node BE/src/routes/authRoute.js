const express = require("express");
const userController = require("../controllers/user-controller");
const passport = require("passport");

const routes = express.Router();
routes.get("/", async (req, res) => {
  return res.send("Auth api functioning");
});
routes.post("/login", userController.loginUser);
routes.post("/logout", userController.logoutUser);
// routes.post("/refresh")
routes.post("/register", userController.registerUser);
routes.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    return res.json({ msg: `Logged in as ${req.user.username}.` });
  }
);
// routes.post("/forgot-password", userController.forgotpassword);
// routes.post("/reset-password", userController.resetpassword);

module.exports = routes;