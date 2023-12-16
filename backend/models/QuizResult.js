// models/QuizResult.js
const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  // You can add more fields as needed
});

const QuizResult = mongoose.model("QuizResult", quizResultSchema);

module.exports = QuizResult;
