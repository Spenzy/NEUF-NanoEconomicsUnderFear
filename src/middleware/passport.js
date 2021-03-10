var user = require("../model/user");
var jwtStrategy = require("passport-jwt").Strategy,
  extractJwt = require("passport-jwt").ExtractJwt;
var config = require("../config/config.js");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

//strategy that will be passed to app
module.exports = new jwtStrategy(opts, function (jwt_payload, done) {
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