import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import TranslatedText from '../components/TranslatedText';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects py-1 pb-3">
      <h1 className='p-3 text-center'><TranslatedText>Projects</TranslatedText></h1>
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