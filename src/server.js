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

//setting up auth routing
const authRoutes = require("./routes/authRoute.js");
app.get("/", function (req, res) {
  return res.send("Auth API running");
});
app.use("/auth", authRoutes);

//setting dass21 routing
const dassRoutes = require("./routes/dassRoute.js");
app.get("/", function (req, res){
  return res.send("DASS API running")
});
app.use("/dass", dassRoutes);

//setting store routing
const storeRoutes = require("./routes/storeRoute.js");
app.get("/", function (req, res){
  return res.send("Store API running")
});
app.use("/store", storeRoutes);

//setting app port
const port = config.port || 8080;
const host = config.host || 'http://localhost'
app.listen(port);
console.log("Running at " + host + ":" + port);