const Category = require('../models/category');
const config = require("../config/conf");


// adds Category to db
exports.addCategory = async (req, res) => {
    if (!req.body.name) {
        return res
            .status(400)
            .json({ msg: "missing required information" });
    }
    Category.findOne({ name:req.body.name }, async (err, category) => {
        if (err) {
            return res.status(400).json({ msg: err });
          }
          if (category) {
            return res.status(400).json({ msg: "Category exists" });
          }
          let newCategory = Category(req.body);
          await newCategory.save(async (err, category) => {
            if (err) {
              return res.status(400).json({ msg: err });
            } 
            return res.status(200).json(category);
          });
    });
}

// retrieves all Categories from db
exports.getAllCategories =  async (req, res) => {
    try {
      const allCategories = await Category.find();
      res.send(allCategories);
    } catch (error) {
      res.status(400).send(error);
    }
}

// retrieves a specific Category from db
exports.getCategory =  async (req, res) => {
    try {
      const foundCategory = await Category.findById(req.params.id);
      if (foundCategory)
      res.send(foundCategory);
      res.status(404).send("Category not found");
    } catch (error) {
      res.status(400).send(error);
    }
}

exports.removeCategory = async (req,res) => {
    Category.findOneAndDelete({ name:req.body.name }, async (err, category) => {
        if (err) {
            return res.status(400).json({ msg: err });
          }
        if (category) {
        return res.status(400).json({ msg: "Deleted successfully" });
        }
    });

};