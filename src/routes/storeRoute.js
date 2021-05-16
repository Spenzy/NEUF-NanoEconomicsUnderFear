const express = require("express");

const routes = express.Router();
const passport = require("passport");

routes.get("/", async (req, res) => {
    return res.send("Store Api functioning");
});

// ------------------product routing-------------------
const productController = require('../controllers/product-controller');
routes.post("/product", productController.addProduct);

//find all products
routes.get("/product", productController.getAllProducts);

//find prodcut by id
routes.get("/product/:id", productController.getProduct);

// -----------------category routing----------------
const categoryController = require('../controllers/category-controller');
routes.post("/category", categoryController.addCategory);

//find all products
routes.get("/category", categoryController.getAllCategories);

//find prodcut by id
routes.get("/category/:id", categoryController.getCategory);

//delete category by id
routes.delete("/category/:id", categoryController.removeCategory)


module.exports = routes;