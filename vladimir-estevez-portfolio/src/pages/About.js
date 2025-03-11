import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import graduationImage from '../images/graduation.jpg';
import { useNavigate } from 'react-router-dom'; // Change this import

function About() {



  const navigate = useNavigate(); // Add this hook
  // Add this function to handle navigation with scrolling
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  


  return (
    <section id="about" className="about py-1 pb-3">
      <Row className="align-items-center p-3">
        
        {/* Image Column - Displays first on mobile */}
        <Col lg={4} className="text-center order-1 order-lg-2 mb-4 lg-md-0">
          <img 
            src={graduationImage} 
            alt="Graduation" 
            className="img-fluid rounded-circle shadow-lg border border-5 border-white"
            style={{ width: '400px', minWidth: '300px' }} 
          />
        </Col>

        {/* Content Column - Displays second on mobile */}
        <Col lg={8} className="order-2 order-md-1">
          <h1 className="text-center fw-bold mb-1">About Me</h1>
          
          <div className="p-4 rounded " style={{ backgroundColor: 'var(--card-bg-secondary)', color: 'var(--text-primary)' }}>
            <p className="lead text-center">
              I am a 2024 Computer Science graduate from Champlain College, specializing in Back-End Development, while maintaining strong Full-Stack capabilities.
            </p>
            <p className="text-center">
              My passion lies in building <strong>scalable, secure, and efficient server-side architectures</strong>, but my front-end experience enables me to collaborate effectively across development teams and understand the complete application lifecycle.
            </p>
            <hr className="my-4" style={{ borderTop: '1px solid #dee2e6', width: '50%', margin: 'auto' }} />
            {/* Technical Expertise Section */}
            <h2 className="text-center mt-3 mb-3">Technical Expertise</h2>
             {/* Core Skills */}
             <div className="d-flex flex-column align-items-center ">
              <h4 className="mb-2">Core Technologies</h4>
              <p className=" lead text-center mb-1">
                <strong>Node.js • ExpressJS • MongoDB • SQL • React</strong>
              </p>
              <p className=" text-center ">
                AWS (Elastic Beanstalk, Lambda) • CI/CD • XAMPP
              </p>
            </div>
                {/* Additional Skills */}
                <div className="d-flex flex-column align-items-center mb-1">
              <h4 className="mb-3">Additional Experience</h4>
              <ul className="text-center list-unstyled mb-1">
                <li className="mb-2">
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' , fontSize: "1.1rem" }}>Game Development</span> with <strong>Unity & C#</strong>
                </li>
                <li className="mb-2">
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px', fontSize: "1.1rem"}}>Data Management & IoT</span> using <strong>Python</strong>
                </li>
                <li>
                  <span style={{ fontSize: "1.1rem" , textDecoration: 'underline', textUnderlineOffset: '2px' }}>Android Development</span> with <strong>Java/Kotlin</strong>
                </li>
              </ul>
            </div>
        <hr className="my-4" style={{ borderTop: '1px solid #dee2e6', width: '50%', margin: 'auto' }} />
            <p className="text-center mt-4">
              I am actively pursuing <strong>back-end development roles</strong> where I can leverage my expertise in <strong>API architecture, database optimization, and cloud infrastructure</strong>. 
              </p>
              <p className="text-center mt-4">While these represent my core strengths, I welcome diverse opportunities that expand my technical horizons. I thrive in collaborative environments that foster innovation and prioritize continuous professional growth.
            </p>
          </div>

          {/* Buttons Section */}
          <Row className="mt-1">
            <Col xs={12} className=" justify-content-center d-flex">
              <div>
                <Button variant="primary" className="me-3" onClick={() => handleNavigation('/projects')}>View My Projects</Button>
            
                <Button variant="primary" onClick={() => handleNavigation('/contact')}>Contact Me</Button>
                </div>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </section>
  );
}

export default About;