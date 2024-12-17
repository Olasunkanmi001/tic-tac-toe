import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
// import GameBoard from "./Components/GameBoard";
import GameBoard from "./Components/GameBoad";
import { motion } from "framer-motion";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove 'dark' class to <html> element based on dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-2 bg-[#EE6C4D] text-white dark:bg-gray-700 rounded hover:bg-[#203857] transition-colors"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <GameBoard />
    </div>
  );
};

export default App;
