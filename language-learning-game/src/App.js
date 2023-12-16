// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const LanguageContext = React.createContext({
  language: "english",
  setLanguage: (lang) => {},
});

const App = () => {
  const [language, setLanguage] = useState("english");

  return (
    <Router>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </LanguageContext.Provider>
    </Router>
  );
};

export default App;
