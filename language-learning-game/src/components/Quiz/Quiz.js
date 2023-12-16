// src/components/Quiz.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import englishQuizQuestions from "./englishQuizQuestions";
import hindiQuizQuestions from "./hindiQuizQuestions";

const Quiz = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const language = searchParams.get("lang");
  const name = searchParams.get("name");

  useEffect(() => {
    if (!["english", "hindi"].includes(language) || !name) {
      // Redirect to home page or show an error message
      navigate("/");
    }
  }, [language, navigate, name]);

  const questions =
    language === "hindi" ? hindiQuizQuestions : englishQuizQuestions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionClick = (option) => {
    if (userAnswers.length >= currentQuestionIndex + 1) {
      return; // Disallow additional clicks if answered
    }

    const isCorrect = option === questions[currentQuestionIndex].correctOption;
    const scoreChange = isCorrect ? 1 : -0.5;

    setUserAnswers([
      ...userAnswers,
      { questionId: questions[currentQuestionIndex].id, isCorrect },
    ]);

    setTotalScore((prevScore) => prevScore + scoreChange);

    setSelectedOption(option);

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      if (currentQuestionIndex === questions.length - 1) {
        setShowResult(true);
      }

      setSelectedOption("");
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption("");
    setShowResult(false);
    setTotalScore(0);
  };

  const percentage = (totalScore / (questions.length * 1)) * 100; // Calculate the percentage

const saveToDatabase = async () => {
  try {
    console.log("Saving quiz result to the database...");

    const response = await fetch("http://localhost:3001/api/saveQuizResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        language,
        score: totalScore,
      }),
    });
    console.log(response);
    if (response.ok) {
      console.log("Quiz result saved successfully!");
    } else {
      console.error(
        "Failed to save quiz result. Response status:",
        response.status
      );
      console.error("Response data:", await response.json());
    }
  } catch (error) {
    console.error("Error while saving quiz result:", error);
  }
};

  const redirectToLeaderboard = async () => {
    // Save quiz result to the database before navigating to the leaderboard
    await saveToDatabase();
    // Navigate to the leaderboard page
    navigate("/leaderboard");
  };

  return (
    <>
      <div
        className="quiz-container"
        style={{ backgroundImage: "url('/lng.jpg')" }}
      >
        {!showResult ? (
          <div className="quiz-question-container">
            <div className="quiz-question-number">
              Question {currentQuestionIndex + 1} out of {questions.length}
            </div>
            <div className="quiz-question">
              {questions[currentQuestionIndex].question}
            </div>
            <ul className="quiz-options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={
                    option === selectedOption
                      ? option === questions[currentQuestionIndex].correctOption
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="quiz-result-container">
            <h2 className="quiz-result-heading">Quiz Result</h2>
            <p className="quiz-result-text">
              {userAnswers.filter((answer) => answer.isCorrect).length} correct
              out of {questions.length}
            </p>
            <p className="quiz-score-text">Your Total Score: {totalScore}</p>
            <p className="score-message">
              {percentage >= 50 ? "Congratulations!" : "Oops!"} {name}, you have{" "}
              {percentage >= 50 ? "passed" : "failed"} in {language}.
            </p>
            <button className="quiz-restart-button" onClick={resetQuiz}>
              Restart Quiz
            </button>
            <button
              className="view-leaderboard-button"
              onClick={redirectToLeaderboard}
            >
              View Leaderboard
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
