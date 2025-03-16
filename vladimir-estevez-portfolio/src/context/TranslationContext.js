import React, { createContext, useState, useContext, useEffect } from 'react';
import { customTranslations } from '../components/translations/customTranslations';
// Create context with default values to avoid the undefined error
const TranslationContext = createContext({
  currentLanguage: 'English',  // Default language
  changeLanguage: () => {},    // Empty function as placeholder
  translateText: () => "",     // Empty function as placeholder
  loading: false
});

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'English';
  });
  
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(false);
  const [globalLoadingTimeout, setGlobalLoadingTimeout] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // Language code mapping
  const languageCodes = {
    'English': 'en',
    'Français': 'fr',
    'Español': 'es'
  };

  // Function to translate text
  const translateText = async (text, targetLanguage) => {
    if (!text) return '';
    if (targetLanguage === 'English') return text;
    
    // Check for custom translations first
    if (customTranslations[targetLanguage] && 
        customTranslations[targetLanguage][text]) {
      return customTranslations[targetLanguage][text];
    }
    
    // Check if we already have this translation cached
    const cacheKey = `${text}_${targetLanguage}`;
    if (translations[cacheKey]) return translations[cacheKey];
    
    try {
      // Individual component loading is handled separately
      
      const response = await fetch('https://us-central1-stately-moon-453208-k4.cloudfunctions.net/translateText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage: languageCodes[targetLanguage]
        }),
      });
      
      const data = await response.json();
      
      if (data.translatedText) {
        // Cache the translation
        setTranslations(prev => ({
          ...prev,
          [cacheKey]: data.translatedText
        }));
        return data.translatedText;
      }
      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    }
  };

  // Function to change the language
  const changeLanguage = (language) => {
    if (language === currentLanguage) return;
    
    // Only show loading when changing TO French or FROM French
    if (language === 'Français' || currentLanguage === 'Français') {
      setLoading(true);
      
      // Clear any existing timeout
      if (globalLoadingTimeout) {
        clearTimeout(globalLoadingTimeout);
      }
      
      // Set a timeout to clear the loading state
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 666);
      
      setGlobalLoadingTimeout(timeout);
    }
    
    // Update language state
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  // Update the setLoadingState function to check for French language
  const setLoadingState = (isLoading) => {
    // Only show loading indicator if in French mode
    if (currentLanguage === 'Français') {
      setLoading(isLoading);
      
      // Failsafe timeout to clear loading state
      if (isLoading) {
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        
        setGlobalLoadingTimeout(timeout);
      }
    }
  };

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (globalLoadingTimeout) {
        clearTimeout(globalLoadingTimeout);
      }
    };
  }, [globalLoadingTimeout]);

  // Update the initial page load effect
  useEffect(() => {
    // Only show loading on initial load if language is French
    if (currentLanguage === 'Français') {
      setLoading(true);
      
      const timeout = setTimeout(() => {
        setLoading(false);
        setInitialLoading(false);
      }, 800);
      
      return () => clearTimeout(timeout);
    } else {
      setInitialLoading(false);
    }
  }, []);

  // Add to the context value
  const value = {
    currentLanguage,
    changeLanguage,
    translateText,
    loading,
    setLoadingState // Add this new function
  };

  return (
    <TranslationContext.Provider
      value={value}
    >
      {children}
    </TranslationContext.Provider>
  );
};