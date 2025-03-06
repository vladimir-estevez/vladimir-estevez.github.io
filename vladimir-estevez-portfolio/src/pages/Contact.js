import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact">
      <h1 className='p-3 text-center'>Contact Me</h1>
      <ListGroup className="theme-aware-listgroup">
        <ListGroup.Item className="theme-aware-item">
          Email: <a href={`mailto:${contactInfo.email}`} className="theme-aware-link">{contactInfo.email}</a>
        </ListGroup.Item>
        <ListGroup.Item className="theme-aware-item">
          GitHub: <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="theme-aware-link">
            {contactInfo.github}
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="theme-aware-item">
          LinkedIn: <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="theme-aware-link">
            {contactInfo.linkedin}
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="theme-aware-item">
          Resume: <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer" className="theme-aware-link">
            View Resume
          </a>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default Contact;