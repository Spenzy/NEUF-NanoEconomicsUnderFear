var user = require("../models/user");
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt;
const config = require("../config/conf.js");


var options = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

//strategy that will be passed to app
module.exports = new jwtStrategy(options, function (jwt_payload, done) {
  //find user and return user if existing
  user.findById(jwt_payload.id, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});
