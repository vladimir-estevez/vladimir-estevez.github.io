import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import graduationImage from '../images/graduation.jpg';
import { useNavigate } from 'react-router-dom';
import TranslatedText from '../components/TranslatedText';

function About() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <section id="about" className="about py-1 pb-3">
      <Row className="align-items-center p-3">
        
        {/* Image Column with increased sizes for medium and large screens */}
        <Col md={8} lg={5} className="text-center order-1 order-lg-2 mb-4 mb-lg-0 mx-auto mx-lg-0">
          <img 
            src={graduationImage} 
            alt="Graduation" 
            className="img-fluid rounded-circle shadow-lg border border-5 border-white"
            style={{ 
              maxWidth: '100%',
              width: 'clamp(320px, 85%, 450px)'  // Increased min, preferred %, and max sizes
            }}
          />
        </Col>

        {/* Content Column - adjusted to complement the wider image */}
        <Col md={12} lg={7} className="order-2 order-lg-1">
          <h1 className="text-center fw-bold mb-1">
            <TranslatedText>About Me</TranslatedText>
          </h1>
          
          <div className="p-4 rounded " style={{ backgroundColor: 'var(--card-bg-secondary)', color: 'var(--text-primary)' }}>
            <p className="lead text-center">
              <TranslatedText>
                I am a 2024 Computer Science graduate from Champlain College, specializing in Back-End Development, with strong Full-Stack capabilities.
              </TranslatedText>
            </p>
            <p className="text-center">
              <TranslatedText>One of my passions is building </TranslatedText> 
              {/* ADD D' WHEN IN FRENCH */}
              <strong>{" "}<TranslatedText> scalable, secure, and efficient server-side architectures</TranslatedText></strong> 
              <TranslatedText>, but my front-end experience enables me to collaborate effectively across development teams and understand the complete application lifecycle.</TranslatedText>
            </p>
            <hr className="my-4" style={{ borderTop: '1px solid #dee2e6', width: '50%', margin: 'auto' }} />
            {/* Technical Expertise Section */}
            <h2 className="text-center mt-3 mb-3">
              <TranslatedText>Technical Expertise</TranslatedText>
            </h2>
             {/* Core Skills */}
             <div className="d-flex flex-column align-items-center ">
              <h4 className="mb-2">
                <TranslatedText>Core Technologies</TranslatedText>
              </h4>
              <p className=" lead text-center mb-1">
                <strong>Node.js • ExpressJS • MongoDB • SQL • React</strong>
              </p>
              <p className=" text-center ">
                AWS (Elastic Beanstalk, Lambda) • CI/CD • XAMPP
              </p>
            </div>
                {/* Additional Skills */}
                <div className="d-flex flex-column align-items-center mb-1">
              <h4 className="mb-3">
                <TranslatedText>Additional Experience</TranslatedText>
              </h4>
              <ul className="text-center list-unstyled mb-1">
                <li className="mb-2">
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' , fontSize: "1.1rem" }}>
                    <TranslatedText>Game Development</TranslatedText>
                  </span> <TranslatedText>with</TranslatedText> <strong>Unity & C#</strong>
                </li>
                <li className="mb-2">
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px', fontSize: "1.1rem"}}>
                    <TranslatedText>Data Management & IoT</TranslatedText>
                  </span> <TranslatedText>using</TranslatedText> <strong>Python</strong>
                </li>
                <li>
                  <span style={{ fontSize: "1.1rem" , textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                    <TranslatedText>Android Development</TranslatedText>
                  </span> <TranslatedText>with</TranslatedText> <strong>Java/Kotlin</strong>
                </li>
              </ul>
            </div>
        <hr className="my-4" style={{ borderTop: '1px solid #dee2e6', width: '50%', margin: 'auto' }} />
        <p className="text-center mt-4">
  <TranslatedText>
    I am actively pursuing</TranslatedText> <strong><TranslatedText> back-end development roles </TranslatedText></strong> <TranslatedText> where I can leverage my expertise in</TranslatedText> <strong><TranslatedText>API architecture, database optimization, and cloud infrastructure</TranslatedText></strong>.
  
</p>
              <p className="text-center mt-4">
                <TranslatedText>While these represent my core strengths, I welcome other opportunities that will expand my technical horizons. I thrive in collaborative environments that foster innovation and prioritize continuous professional growth.</TranslatedText>
            </p>
          </div>

          {/* Buttons Section */}
          <Row className="mt-1">
            <Col xs={12} className=" justify-content-center d-flex">
              <div>
                <Button variant="primary" className="me-3" onClick={() => handleNavigation('/projects')}>
                  <TranslatedText>View My Projects</TranslatedText>
                </Button>
            
                <Button variant="primary" onClick={() => handleNavigation('/contact')}>
                  <TranslatedText>Contact Me</TranslatedText>
                </Button>
                </div>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </section>
  );
}

export default About;