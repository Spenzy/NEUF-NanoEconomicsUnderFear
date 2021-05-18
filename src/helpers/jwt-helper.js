const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.createToken = function (user) {
    jwt.sign({ id: user._id, isAdmin: user.isAdmin },
        config.jwtSecret, 
        { expiresIn: 86400 }) //token expires in 1day
}
    

exports.createRefresh = function (user) {
        jwt.sign({user: user.username }, 
        config.refreshSecret, 
        { expiresIn: '1y' }) //token expires in 6hrs
} 

