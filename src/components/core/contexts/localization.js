import React, { useState, createContext } from "react";

const LanguageContext = createContext();

const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "fa",
  );
  const [direction, setDirection] = useState(
    localStorage.getItem("direction") || "rtl",
  );

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const changeDirection = (newDirection) => {
    setDirection(newDirection);
    localStorage.setItem("direction", newDirection);
  };

  const contextValue = { language, direction, changeLanguage, changeDirection };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LocalizationProvider;
