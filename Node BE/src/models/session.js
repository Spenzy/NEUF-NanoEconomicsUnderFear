const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userID: String,
  DASS21_SCORES: [],
  sessionDetails: [],
});

module.exports = mongoose.model("session", sessionSchema);