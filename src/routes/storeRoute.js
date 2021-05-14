const express = require("express");

const routes = express.Router();
const passport = require("passport");

routes.get("/", async (req, res) => {
    return res.send("Store Api functioning");
});

routes.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    
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
    const allProducts = await Product.find();
    res.send(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});

//find prodcut by id
routes.get("/:id", async (req, res) => {
  try {
    const foundProdcut = await Product.findById(req.params.id);
    if (foundProdcut)
    res.send(foundProdcut);
    res.status(404).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = routes;