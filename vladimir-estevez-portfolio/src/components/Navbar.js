import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavigationBar({children}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation, close menu, and scroll to top
  const handleNavigation = (path) => {
    setExpanded(false);         // Close the navbar
    navigate(path);             // Navigate to the path
    window.scrollTo(0, 0);      // Scroll to top of page
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className="theme-aware-navbar" 
        expanded={expanded}
        onToggle={setExpanded}
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