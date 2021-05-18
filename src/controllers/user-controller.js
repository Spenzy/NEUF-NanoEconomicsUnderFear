var User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const jwtHelper = require("../helpers/jwt-helper");

//this function permits user registration
exports.registerUser = async (req, res) => {
  //check for required information
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "missing required information" });
  }
  //find if a user exists with said information
  //let loginMethod = !!username ? {username: username} : {email: email};
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
    await newUser.save(async (err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      } 
      
      return res.status(200).json(user);
    });
  });
};

//this function permits user login
exports.loginUser = (req, res) => {
  //check for required information
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "missing required information" });
  }
  //find if a user exists with said information
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User not found" });
    }
    //check password
    user.comparePassword(req.body.password, async(err, isMatch) => {
      if (isMatch && !err) {
        //access token creation
        const token = await jwtHelper.createToken(user);
        const refreshToken = await jwtHelper.createRefresh(user);
        return res.status(200).json({ token, refreshToken });
      } else {
        return res.status(400).json({
          msg: "mismatched email and password",
        });
      }
    });
  });
};

exports.getUser = async (req, res) => {
  User.findOne({ _id: req.body.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (!user) {
      return res
        .status(400)
        .json({ msg: "No user with said information exists" });
    }
    else
      return res
        .status(200)
  })
};

//this function logs out user
exports.logoutUser = (req, res) => {
  res.token = null;
  res.status(200).json({msg : "logged out"});
};