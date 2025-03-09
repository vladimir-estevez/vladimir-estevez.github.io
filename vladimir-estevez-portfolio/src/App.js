import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SideProjects from './pages/SideProjects'; // Update import name
import projects from './components/ProjectList';
import sideProjects from './components/SideProjectList';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BackgroundVideo from './components/BackgroundVideo';
import CVs from './files/CV and Reference Letters .zip'
function App() {



  const contactInfo = {
    email: 'jvestev@gmail.com',
    github: 'github.com/josevladimirestevez',
    linkedin: 'linkedin.com/in/vladimir-estevez',
    resume: CVs,
  };

  const { pathname } = useLocation();

  return (
    <ThemeProvider>
    <Container className="app">
      <BackgroundVideo />
    <NavigationBar>
      <ThemeToggle />
      </NavigationBar>
      <Row>
        <Col md={12}>
         
          <Routes>
          <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/side-projects" element={<SideProjects sideProjects={sideProjects} />} /> {/* Update route */}
            <Route path="/contact" element={<Contact contactInfo={contactInfo} />} />
          </Routes>
        </Col>
      </Row>
      <footer className="footer mt-auto py-3 text-center">
        &copy; 2025 Vladimir Estevez. All rights reserved.
      </footer>
    </Container>
    </ThemeProvider>
  );
}

export default App;