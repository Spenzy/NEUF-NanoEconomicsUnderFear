var User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.registerUser = (req, res) => {
  //check for required information
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "you are missing required information" });
  }
  //find if a user exists with said information
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (user) {
      return res.status(400).json({ msg: "User Exists" });
    }
    //password should not be shown even when crypted
    {password:0}
    let newUser = User(req.body);
    await newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      } 
      
      return res.status(200).json(user);
    });
  });
};

exports.loginUser = (req, res) => {
  //check for required information
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "you are missing required information" });
  }
  //find if a user exists with said information
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (!user) {
      return res
        .status(400)
        .json({ msg: "No user with said information exists" });
    }
    //check password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        return res.status(200).json({
          //token creation
          token: jwt.sign({ id: user.id }, config.jwtSecret, {
          expiresIn: 50 //token expires in 6hrs
          })
        });
      } else {
        return res.status(400).json({
          msg: "mismatched email and password",
        });
      }
    });
  });
};

exports.logoutUser = (req, res) => {
  res.status(200).send({token: null });
};

