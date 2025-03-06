import React, { useState } from 'react';
import { Card, ListGroup, Button, Modal, Badge } from 'react-bootstrap';
import youtubeIcon from '../images/youtube.png';


const Project = ({ title, description, technologies, githubLink, image, extendedDescription, youtubeUrl }) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Extract YouTube video ID from URL
  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeVideoId = youtubeUrl ? getYoutubeVideoId(youtubeUrl) : null;

  return (
    <>
      <Card 
        className="project h-100 text-center border-light shadow-sm" 
        style={{ 
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
        }}
      >
        {/* Video badge for projects with YouTube videos */}
        {youtubeUrl && (
          <Badge 
            bg="dark" 
            className="position-absolute end-0 top-0 m-2"
            style={{ zIndex: 1 }}
          >
            <img 
              src={youtubeIcon} 
              alt="YouTube" 
              style={{ 
                height: '16px', 
                width: 'auto', 
                marginRight: '5px',
                verticalAlign: 'middle'
              }} 
            />
            Video
          </Badge>
        )}
        
        {image && (
          <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={image} alt={title} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
          </div>
        )}
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>
          <ListGroup 
  variant="flush" 
  className="w-100 text-center"
>
  {technologies.map((tech, index) => (
    <ListGroup.Item 
      key={index}
      className="theme-aware-listitem"
    >
      {tech}
    </ListGroup.Item>
  ))}
</ListGroup>
          <div className="mt-auto d-flex justify-content-center">
            <Button 
              variant="primary"
              onClick={handleShow}
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} size="lg" className="theme-aware-modal">
        <Modal.Header closeButton className="theme-aware-modal">
          <Modal.Title className="theme-aware-modal" >{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="theme-aware-modal">
          {/* YouTube video embed */}
          {youtubeVideoId && (
            <div className="ratio ratio-16x9 mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title={`${title} video`}
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          )}
          
          {/* Project image (show only if no video) */}
          {!youtubeVideoId && image && (
            <div className="text-center mb-4">
              <img 
                src={image} 
                alt={title} 
                className="img-fluid" 
                style={{ maxHeight: '400px', objectFit: 'contain' }} 
              />
            </div>
          )}
          
          <h5>Project Description</h5>
          <p>{extendedDescription || description}</p>
          
          <h5>Technologies Used</h5>
          <ul className="mb-4">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          
          <div className="text-center">
            <Button 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary"
            >
              View on GitHub
            </Button>
            {youtubeUrl && (
              <Button 
                href={youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="danger"
                className="ms-2"
              >
                <i className="bi bi-youtube me-1"></i> Watch on YouTube
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;