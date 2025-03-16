import React, { useEffect } from 'react';
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
import { TranslationProvider } from './context/TranslationContext';
import Loading from './components/Loading';
import TranslatedText from './components/TranslatedText';

function App() {



  const contactInfo = {
    email: 'jvestev@gmail.com',
    github: 'github.com/vladimir-estevez',
    linkedin: 'linkedin.com/in/vladimir-estevez',
    resume: CVs,
  };

  const { pathname } = useLocation();

   // Scroll to top when pathname changes
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <TranslationProvider>
    <ThemeProvider>
      <Loading />
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

      <footer className="footer mt-auto pb-3 text-center">
      <TranslatedText>
        &copy; 2025 Vladimir Estevez - All rights reserved.
      </TranslatedText>
      </footer>
    </Container>
    </ThemeProvider>
    </TranslationProvider>
  );
}

export default App;