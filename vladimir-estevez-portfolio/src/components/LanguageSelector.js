import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from '../context/TranslationContext.js';

const LanguageSelector = () => {
  const translation = useTranslation();
  const currentLanguage = translation?.currentLanguage || 'English';
  const changeLanguage = translation?.changeLanguage || (() => {});
  
  // Handler for language selection
  const handleLanguageSelect = (language) => {
    changeLanguage(language);
  };

  return (
    <Dropdown className="">
      <Dropdown.Toggle 
        variant="primary" 
        id="dropdown-language"
        className="mx-1"
      >
        {currentLanguage}
      </Dropdown.Toggle>

      <Dropdown.Menu className="">
        <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('English')}
        >
          English
        </Dropdown.Item>
        <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('Français')}
        >
          Français
        </Dropdown.Item>
        {/* <Dropdown.Item 
          className="no-highlight"
          onClick={() => handleLanguageSelect('Español')}
        >
          Español
        </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;