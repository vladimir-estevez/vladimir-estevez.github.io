import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;