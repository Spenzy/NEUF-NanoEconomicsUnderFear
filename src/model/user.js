var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  Password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  Gender: {
    type: String,
  },
  Country: {
    type: String,
  },
  Education: {
    type: String,
  },
  Occupation: {
    type: String,
  },
});

//password hashing using bcrypt
//we call the pre save of userSchema
userSchema.pre("save", function (next) {
  var user = this;
  //check if password is modified
  if (!user.isModified("password")) return next();
  //if modified generate salt to hash password
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    //here we hash the password
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      //we saved hashed password
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User, UserSchema");
