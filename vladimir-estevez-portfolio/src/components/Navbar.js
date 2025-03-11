import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

function NavigationBar({children}) {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle navigation, close menu, and scroll to top
  const handleNavigation = (path) => {
    setExpanded(false);
    navigate(path);
    window.scrollTo(0, 0);
  };
  
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
      navbar.removeEventListener('touchmove', handleTouchMove);
      navbar.removeEventListener('wheel', handleTouchMove);
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
                Home
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/projects')} 
                className="nav-link theme-aware-link"
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/side-projects')} 
                className="nav-link theme-aware-link"
              >
                Side Projects
              </Nav.Link>
              <Nav.Link 
                onClick={() => handleNavigation('/contact')} 
                className="nav-link theme-aware-link"
              >
                Contact
              </Nav.Link>
              <LanguageSelector />
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