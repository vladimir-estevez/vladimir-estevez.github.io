import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import graduationImage from '../images/graduation.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="about py-3">
      <Row className="align-items-center mb-4">
        {/* Image column - will display first on mobile */}
        <Col md={4} className="text-center order-1 order-md-2 mb-4 mb-md-0">
          <div className="position-relative">
            <img 
              src={graduationImage} 
              alt="Graduation" 
              className="img-fluid rounded-circle shadow"
              style={{ 
                maxWidth: '100%',
                border: '5px solid white',
              }} 
            />
          </div>
        </Col>

        {/* Content column - will display second on mobile */}
        <Col md={8} className="order-2 order-md-1">
          <h1 className="mb-3 text-center fw-bold">About Me</h1>
          <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: 'var(--card-bg-secondary)', color: 'var(--text-primary)' }}>
            <div className='lead'>
              <p className="text-center">
                I am a 2024 Computer Science graduate from Champlain College passionate about <strong>Full-Stack Web and Software Development</strong>.
              </p>
              <p className="text-center">
                With a strong foundation in both front-end and back-end technologies, I have worked on a diverse range of projects, 
                from <strong>MERN stack web applications</strong> and <strong>game development</strong> to <strong>mobile apps</strong> and <strong>IoT solutions</strong>.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-center">Technical Expertise</h3>
              <div> 
                <p className="mb-3 text-center">
                  My technical expertise includes <span className="fw-bolder">JavaScript (React, Node.js), Python, C#, Kotlin, and SQL</span>, 
                  along with experience in <span className="fw-bolder">AWS cloud technologies</span> (Redshift, EC2 and others) and <span className="fw-bolder">CI/CD pipelines</span>.
                </p>
                <p className="mb-3 text-center">
                  I have developed projects involving <span className="fw-bolder">data visualization, virtual reality, and automation</span>, always focusing on <span className="fw-bolder">innovation and user experience</span>.
                </p>
                <p className="text-center mt-4">
                  I am eager to apply my skills to real-world challenges, collaborate on impactful projects, and continuously expand my knowledge in the ever-evolving field of technology.
                </p>
              </div>
            </div>
          </div>
          
          <Row className="justify-content-center mt-4 mb-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Link to="/projects">
                <Button variant="primary" className="me-2">View My Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary">Contact Me</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default About;