import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
// import Project from './components/Project';
// import SkillList from './components/SkillList';
import projects from './components/ProjectList';
import skills from './components/SkillList';
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
            <Route path="/skills" element={<Skills skills={skills} />} />
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