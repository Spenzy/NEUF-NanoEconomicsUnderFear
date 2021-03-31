const express = require("express");

const routes = express.Router();
const passport = require("passport");

routes.get("/", async (req, res) => {
    return res.send("Store Api functioning");
});

routes.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//find all products
routes.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
});

//find prodcut by id
routes.get("/:id", async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    if (foundUser)
    res.send(foundUser);
    res.status(404).send();
  } catch (error) {
    res.status(400).send(error);
  }
});  

module.exports = routes;