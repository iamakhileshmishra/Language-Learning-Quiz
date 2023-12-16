// src/components/LanguageSelection.js
import React, { useState } from "react";

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return <div>{/* Language selection UI goes here */}</div>;
};

export default LanguageSelection;
