import React, { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const NavBar = () => {
  // Defines the state "darkMode" to manage dark mode, initializing from localStorage or defaulting to false incase of errors
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });
  // the symbol || means or , meaning true or false logic others are &&(and)
  // jason.parse is to get data from local storage

  // Apply appropriate class to the body based on the darkmode state
  if (darkMode) {
    // Remove lightMode class if darkMode is enabled
    document.body.classList.remove("light-mode");
  } else {
    // Add lightmode class if darkMode is disabled
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsMoonFill /> : <BsMoon />;

  return (
    <nav className="d-flex justify-content-between align-item-center p-5 shadow bg-elements custom-text-color">
      <h3 className="mb-0">Where in the world</h3>

      <div
        onClick={() => {
          // toggle the light-mode class on the body
          document.body.classList.toggle("light-mode");
          // update the darkmode with the opposite of what was previously in the darkmode previously
          setDarkMode(!darkMode);
          // update the localstorage with current mode, either light or dark
          // ! this  symbol represent if not
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-2"
      >
        {icon}
        <p className="mb-0">{darkMode ? "light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
