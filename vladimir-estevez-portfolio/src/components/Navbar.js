import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({children}) {
  return (
    <Navbar expand="lg" className="theme-aware-navbar"> 
      <Container>
     
      <Navbar.Brand>
  <a href='/' style={{ textDecoration: 'none', color: 'inherit'  }}>Vladimir Estevez - Portfolio</a>
</Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="theme-aware-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link theme-aware-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link theme-aware-link">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/side-projects" className="nav-link theme-aware-link">
              Side Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link theme-aware-link">
              Contact
            </Nav.Link>
            {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;