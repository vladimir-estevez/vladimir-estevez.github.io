import React from 'react';
// Only import what you use
import { ListGroup } from 'react-bootstrap';
import { getDownloadName } from '../components/getDownloadName';

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact py-3">
      <h1 className='p-3 text-center'>Contact Me</h1>
      <div className="d-flex justify-content-center">
        <ListGroup className="theme-aware-listgroup contact-list w-75">
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
            Resume and Reference Letters: <a 
              href={contactInfo.resume} 
              download={getDownloadName(contactInfo.resume)}
              className="theme-aware-link"
            >
              Download Resume and Reference Letters
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  );
}

export default Contact;