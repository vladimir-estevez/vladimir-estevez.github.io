import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/TranslationContext';

// Add this function to process URLs in the text
const parseUrlsInText = (text) => {
  if (!text) return '';
  
  // console.log('Parsing URLs in:', text);
  
  // First, handle actual HTML <a> tags that might be in the text
  // This regex looks for <a>website.com</a> pattern
  let processedText = text.replace(
    /<a>\s*(https?:\/\/)?([^<\s]+)\s*<\/a>/g, 
    function(match, protocol, domain) {
      // console.log('Found <a> tag match:', match, 'Domain:', domain);
      return `<a href="https://${domain}" target="_blank" class="project-link" rel="noopener noreferrer">${domain}</a>`;
    }
  );
  
  // Then handle plain domain names
  processedText = processedText.replace(
    /(\s|^)([\w-]+\.(org|com|net|io|dev|co|edu|gov))([\s.,;:!?)]|$)/g,
    '$1<a href="https://$2" target="_blank" class="project-link" rel="noopener noreferrer">$2</a>$4'
  );
  
  // console.log('After parsing:', processedText);
  return processedText;
};

const TranslatedText = ({ children, html = false }) => {
  const { translateText, currentLanguage } = useTranslation();
  const [translatedContent, setTranslatedContent] = useState(children);
  
  // Add this console log
  useEffect(() => {
    if (html && typeof children === 'string' && children.includes('<a>')) {
      // console.log('HTML content before:', children);
    }
  }, [children, html]);
  
  useEffect(() => {
    const updateTranslation = async () => {
      if (typeof children === 'string' && currentLanguage !== 'English') {
        try {
          const translated = await translateText(children, currentLanguage);
          
          // Process translated content
          let processedContent = translated;
          
          // Fix common encoding issues if this is HTML content
          if (html) {
            processedContent = processedContent
              .replace(/&#39;/g, "'")
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"');
              
            // Process URLs in HTML content
            processedContent = parseUrlsInText(processedContent);
            
            // Add this inside the if(html) block, before setting content
            if (html && typeof processedContent === 'string' && processedContent.includes('<a>')) {
              // console.log('HTML content after processing:', processedContent);
            }
          }
          
          setTranslatedContent(processedContent);
        } catch (error) {
          console.error("Translation error:", error);
        }
      } else {
        // For English or non-string content, just use as is
        let content = children;
        
        // Process URLs for HTML content in English too
        if (html && typeof content === 'string') {
          content = parseUrlsInText(content);
        }
        
        setTranslatedContent(content);
      }
    };
    
    updateTranslation();
  }, [children, currentLanguage, translateText, html]);
  
  // Return HTML content if specified
  if (html && typeof translatedContent === 'string') {
    const finalContent = translatedContent;
    // console.log('Rendering HTML:', finalContent);
    return <div dangerouslySetInnerHTML={{ __html: finalContent }} />;
  }
  
  // Regular text content
  return <>{translatedContent}</>;
};

export default TranslatedText;