var user = require("../model/user.js");
var jwt = require("jsonwebtoken");
var config = require("../config/config.js");

exports.registerUser = (req, res) => {
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
    if (user) {
      return res.status(400).json({ msg: "User Exists" });
    }
    let newUser = User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(201).json(user);
    });
  });
};

function createToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 20,
  });
}

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
          token: createToken(),
        });
      } else {
        return res.status(400).json({
          msg: "mismatched email and password",
        });
      }
    });
  });
};
