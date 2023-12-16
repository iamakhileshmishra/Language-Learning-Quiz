// src/components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const [name, setName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{ backgroundImage: "url('/lng.jpg')" }}
      >
        {/* Your beautiful background image or styling */}
      </div>
      <div className="home-content">
        <h1>Welcome to the Language Learning Quiz</h1>
        <h2>Enter your Name</h2>
        <input
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        />
        {name && (
          <>
            <p>Choose your preferred language:</p>
            <div className="language-options">
              <button
                className="language-option"
                onClick={() => handleLanguageSelect("english")}
              >
                English
              </button>
              <button
                className="language-option"
                onClick={() => handleLanguageSelect("hindi")}
              >
                Hindi
              </button>
            </div>
          </>
        )}
        {name && selectedLanguage && (
          <div>
            <p>
              Name: {name}, Language: {selectedLanguage}
            </p>
            {/* You can add a button to navigate to the quiz page and send data to your backend */}
            <Link
              to={`/quiz?lang=${selectedLanguage}&name=${name}`}
              className="start-quiz-button"
            >
              Start Quiz
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
