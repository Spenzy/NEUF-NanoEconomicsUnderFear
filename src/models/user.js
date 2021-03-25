const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

PERSONAL_INFO = [
  {
    birthday: {
      type: Date
    },
    Gender: {
      type: String
    },
    Country: {
      type: String
    },
    Education: {
      type: String
    },
    Occupation: {
      type: String
    }
  }
];

DASS21_SCORES = [
    {
      depressionScore: {
        type: Number
      },
      anxietyScore: {
        type: Number
      },
      stressScore: {
        type: Number
      }
    }
];

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
  password: {
    type: String,
    required: true,
  },
  personalInfo: PERSONAL_INFO,
  dasScores: DASS21_SCORES
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

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = mongoose.model("user", userSchema);