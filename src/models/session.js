const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  DASS21_SCORES: {
    String
  },
  sessionDetails: {
    type: String
  },
});

module.exports = mongoose.model("session", sessionSchema);