import React from 'react';
// Only import what you use
import { ListGroup } from 'react-bootstrap';
import { getDownloadName } from '../components/getDownloadName';
import TranslatedText from '../components/TranslatedText';

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact py-1 pb-3">
      <h1 className='p-3 text-center'>
        <TranslatedText>Contact Me</TranslatedText>
      </h1>
      <div className="d-flex justify-content-center">
        <ListGroup className="theme-aware-listgroup contact-list w-75">
          <ListGroup.Item className="theme-aware-item">
            <TranslatedText>Email</TranslatedText>: <a href={`mailto:${contactInfo.email}`} className="theme-aware-link">{contactInfo.email}</a>
          </ListGroup.Item>
          <ListGroup.Item className="theme-aware-item">
            <TranslatedText>LinkedIn</TranslatedText>: <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="theme-aware-link">
              {contactInfo.linkedin}
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="theme-aware-item">
            <TranslatedText>GitHub</TranslatedText>: <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="theme-aware-link">
              {contactInfo.github}
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="theme-aware-item">
            <TranslatedText>Resume and Reference Letters</TranslatedText>: <a 
              href={contactInfo.resume} 
              download={getDownloadName(contactInfo.resume)}
              className="theme-aware-link"
            >
              <TranslatedText>Download Resume and Reference Letters</TranslatedText>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  );
}

export default Contact;