// routes/auth.js
const express = require("express");
const QuizResult = require("../models/QuizResult"); // Add this line

const router = express.Router();

// ... (existing code)

router.post("/saveQuizResult", async (req, res) => {
  try {
    const { name, language, score } = req.body;
 console.log("Received request to save quiz result:", req.body);
    // Create a new QuizResult document
    const quizResult = new QuizResult({
      name,
      language,
      score,
    });

    // Save the quiz result to MongoDB
    await quizResult.save();

    res.sendStatus(201);
  } catch (error) {
    console.error("Error saving quiz result:", error);
    res.sendStatus(500);
  }
});

module.exports = router;
