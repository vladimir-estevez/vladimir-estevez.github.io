import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project'; // Same Project component used in Projects.js
import TranslatedText from '../components/TranslatedText';

function SideProjects({ sideProjects }) {
  // console.log('Received sideProjects:', sideProjects); // Debug log

  return (
    <section id="sideProjects" className="sideProjects pt-1 pb-3">
      <h1 className='p-3 text-center'><TranslatedText>
        Side Projects
        </TranslatedText>
        </h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {Array.isArray(sideProjects) && sideProjects.map((project, index) => (
          <Col key={index}>
            <Project {...project} /> {/* Same Project component as used in Projects */}
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SideProjects;