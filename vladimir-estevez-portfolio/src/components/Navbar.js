import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import TranslatedText from './TranslatedText';
import { useTranslation } from '../context/TranslationContext';

function NavigationBar({children}) {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const { setLoadingState } = useTranslation();

  // Function to handle navigation, close menu, and scroll to top
  const handleNavigation = (path) => {
    // Show loading indicator
    setLoadingState(true);
    
    // Close navbar if expanded
    setExpanded(false);
    
    // Navigate to the new page
    navigate(path);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // The loading state will be cleared automatically when
    // translations are completed or after timeout
  };
  
  // Handle clicking outside the navbar
  useEffect(() => {
    if (!expanded) return;
    
    function handleClickOutside(event) {
      // If navbar is expanded and click is outside navbar
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    
    // Add event listener when navbar is expanded
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded]);
  
  // Set up event handlers for the navbar when expanded
  useEffect(() => {
    if (!navbarRef.current) return;
    
    // Prevent scrolling only when interacting with the navbar
    const handleTouchMove = (e) => {
      if (expanded) {
        // Check if the event originated from the navbar or its children
        if (navbarRef.current.contains(e.target)) {
          e.preventDefault();
        }
      }
    };
    
    const navbar = navbarRef.current;
    
    if (expanded) {
      // Add event listener only to the navbar element
      navbar.addEventListener('touchmove', handleTouchMove, { passive: false });
      navbar.addEventListener('wheel', handleTouchMove, { passive: false });
    }
    
    return () => {
      // Clean up event listeners
      if (navbar) {
        navbar.removeEventListener('touchmove', handleTouchMove);
        navbar.removeEventListener('wheel', handleTouchMove);
      }
    };
  }, [expanded]);

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className="theme-aware-navbar" 
        expanded={expanded}
        onToggle={setExpanded}
        ref={navbarRef}
      > 
        <Container>
          <Navbar.Brand>
            <a 
              href='/' 
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              Vladimir Estevez - Portfolio
            </a>
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            className="theme-aware-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                onClick={() => handleNavigation('/')} 
                className="nav-link theme-aware-link"
              > 
              {/* INSTEAD OF MAISON ACCEUIL  */}
                <TranslatedText>Home</TranslatedText>
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/projects')} 
                className="nav-link theme-aware-link"
              ><TranslatedText>Projects</TranslatedText>
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/side-projects')} 
                className="nav-link theme-aware-link"
              >
               <TranslatedText> Side Projects</TranslatedText>
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/contact')} 
                className="nav-link theme-aware-link"
              >
                <TranslatedText>
                Contact
                </TranslatedText>
              </Nav.Link>
           {/* <LanguageSelector /> */}
              {children}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ paddingTop: "56px" }}></div>
    </>
  );
}

export default NavigationBar;