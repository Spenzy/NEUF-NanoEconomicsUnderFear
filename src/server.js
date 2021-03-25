const express = require("express");
const mongoose = require("mongoose");

//app init
const app = express(); //init app
const cors = require("cors");
app.use(cors());

//setting json request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//applying passport middleware
const passport = require("passport");
const passportMW = require("./middleware/passport.js");
app.use(passport.initialize());
passport.use(passportMW);

//setting db connection
const config = require("./config/config");
mongoose.connect(
  config.db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);

//setting up app routing
const routes = require("./routes.js");
app.get("/", function (req, res) {
  return res.send("Api running");
});
app.use("/auth", routes);

//setting app port
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Running at http://localhost:" + port);