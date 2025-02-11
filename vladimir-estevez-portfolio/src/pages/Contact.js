import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <ListGroup>
        <ListGroup.Item>
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </ListGroup.Item>
        <ListGroup.Item>
          GitHub: <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer">
            {contactInfo.github}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          LinkedIn: <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            {contactInfo.linkedin}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          Resume: <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default Contact;