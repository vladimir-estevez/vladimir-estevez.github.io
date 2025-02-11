import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Project from './components/Project';
import SkillList from './components/SkillList';

function App() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/portfolio',
      image: '/images/portfolio.png',
    },
    {
      title: 'E-commerce Store',
      description: 'Developed a fully functional e-commerce platform with user authentication and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      image: '/images/ecommerce.png',
    },
    {
      title: 'Task Management App',
      description: 'A task management application to organize and track tasks.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubLink: 'https://github.com/yourusername/task-manager',
      image: '/images/taskmanager.png',
    },
  ];

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'HTML',
    'CSS',
    'Git',
    'RESTful APIs',
    'SQL',
    'Python',
    'C#',
  ];

  const contactInfo = {
    email: 'jvestev@gmail.com',
    github: 'github.com/josevladimirestevez',
    linkedin: 'linkedin.com/in/yourprofile',
    resume: '/resume.pdf',
  };

  const location = useLocation();

  return (
    <Container className="app">
      <NavigationBar />
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
      <footer className="footer">
        &copy; 2025 Vladimir Estevez. All rights reserved.
      </footer>
    </Container>
  );
}

export default App;