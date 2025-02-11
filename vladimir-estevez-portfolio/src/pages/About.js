import React from 'react';
import { Row, Col } from 'react-bootstrap';
import graduationImage from '../images/graduation.jpg';

function About() {
  return (
    <section id="about" className="about">
      <Row>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            2024 Computer Science Graduate at Champlain College - Passionate about Full-Stack Web and Software development.
            I am a highly motivated and skilled web and software developer with a passion for creating innovative and user-friendly
            applications. With experience in React, Node.js, and other modern technologies, I am eager to contribute to a dynamic
            team and build impactful solutions.
          </p>
        </Col>
        <Col md={4}>
        <img src={graduationImage} alt="Graduation" className="img-fluid" />
        </Col>
      </Row>
    </section>
  );
}

export default About;