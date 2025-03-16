import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from '../context/TranslationContext';

const Loading = () => {
  const { loading } = useTranslation();
  
  if (!loading) return null;
  
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <Spinner 
          animation="border" 
          role="status"
          variant="primary"
          style={{ width: '3rem', height: '3rem' }}
        />
        <p className="mt-3 loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;