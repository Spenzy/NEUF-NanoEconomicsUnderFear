const mongoose = require("mongoose");

//user's dass21 scores model
const DASS21_SCORES = {
  answers: [],
  depressionScore: {
    type: Number,
  },
  anxietyScore: {
    type: Number,
  },
  stressScore: {
    type: Number,
  },
};

const sessionSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  DASS21_SCORES: DASS21_SCORES,
  Activity: [],
});

module.exports = mongoose.model("session", sessionSchema);