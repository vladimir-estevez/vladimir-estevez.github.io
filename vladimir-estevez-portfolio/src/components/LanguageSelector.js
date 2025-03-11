import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const LanguageSelector = () => {
  // Initialize selected language from localStorage or default to English
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'English';
  });
  
  // Handler for language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    // Save selection to localStorage
    localStorage.setItem('selectedLanguage', language);
    // Later, this is where you'd add translation logic
  };

  // Ensure localStorage is updated if selectedLanguage changes through other means
  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Dropdown className="">
      <Dropdown.Toggle 
        variant="primary" 
        id="dropdown-language"
        className="mx-1"
      >
        {selectedLanguage} {/* Display the selected language */}
      </Dropdown.Toggle>

      <Dropdown.Menu className="">
        <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('English')}
          // active property removed
        >
          English
        </Dropdown.Item>
        <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('Français')}
          // active property removed
        >
          Français
        </Dropdown.Item>
        <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('Español')}
          // active property removed
        >
          Español
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;