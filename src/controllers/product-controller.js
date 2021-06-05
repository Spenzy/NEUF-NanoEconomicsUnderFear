const Product = require('../models/product');
const config = require("../config/config");


// adds product to db
exports.addProduct = async (req, res) => {
    if (!req.body.name
      && !req.body.image
      && !req.body.category
      && !req.body.description
      && !req.body.price ) {
        return res
            .status(400)
            .json({ msg: "missing required information" });
    }
    Product.findOne({ name:req.body.name }, async (err, product) => {
        if (err) {
            return res.status(400).json({ msg: err });
          }
          if (product) {
            return res.status(400).json({ msg: "Product exists" });
          }
          let newProduct = Product(req.body);
          await newProduct.save(async (err, product) => {
            if (err) {
              return res.status(400).json({ msg: err });
            } 
            return res.status(200).json(product);
          });
    });
}

// retrieves all products from db
exports.getAllProducts =  async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
}

// retrieves a specific product from db
exports.getProduct =  async (req, res) => {
  try {
    const foundProdcut = await Product.findById(req.params.id);
    if (foundProdcut)
    res.send(foundProdcut);
    res.status(404).send("Product not found");
  } catch (error) {
    res.status(400).send(error);
  }
}

// removes a specific product from db
exports.removeProduct = async (req,res) => {
  Category.findOneAndDelete({ name:req.body.name }, async (err, category) => {
      if (err) {
          return res.status(400).json({ msg: err });
        }
      if (category) {
      return res.status(400).json({ msg: "Deleted successfully" });
      }
  });

};