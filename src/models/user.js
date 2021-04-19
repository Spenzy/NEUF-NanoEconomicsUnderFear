const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//user's personal information model
const PERSONAL_INFO = [
  {
    birthday: {
      type: Date,
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
  },
];

//user's dass21 scores model
const DASS21_SCORES = [
  {
    depressionScore: {
      type: Number,
    },
    anxietyScore: {
      type: Number,
    },
    stressScore: {
      type: Number,
    },
  },
];

//user Schema for db and app usage
const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  personalInfo: PERSONAL_INFO,
  sessions: {
    id: String,
    dasScores: DASS21_SCORES,
    activity: [],
    timestamp: Date,
  },
});

//password hashing using bcrypt
//we call the pre-save of userSchema
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

//checking password for login
userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("user", userSchema);
