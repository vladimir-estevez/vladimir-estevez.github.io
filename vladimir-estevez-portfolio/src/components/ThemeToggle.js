import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper mx-1">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <span className="slider">
          <i className="bi bi-sun sun-icon icon"></i>
          <i className="bi bi-moon-fill moon-icon icon "></i>
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;