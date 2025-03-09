import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Modal, Badge } from 'react-bootstrap';
import youtubeIcon from '../images/youtube.png';
import pdfIcon from '../images/icons/pdf.png';
import pptIcon from '../images/icons/ppt.png';
import zipIcon from '../images/icons/zip.png';
import jpgIcon from '../images/icons/jpg.png';
import darkModeGit from '../images/darkModeGit.png';
import lightModeGit from '../images/lightModeGit.png';
import python from '../images/icons/Python.png';


const Project = ({ title, description, technologies, githubLink, image, extendedDescription, youtubeUrl, files }) => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme'));
  
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);



  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getDownloadName = (filePath) => {
    // Extract the base filename from the path
    const filename = filePath.split('/').pop();
    const parts = filename.split('.');
    if (parts.length >= 3) {
      // Remove the second to last part (assumed to be a hash) if it matches a basic hash pattern (hex characters)
      const potentialHash = parts[parts.length - 2];
      // Check if potentialHash is all hexadecimal (this is a simple check)
      if (/^[0-9a-f]+$/i.test(potentialHash)) {
        // Remove the hash portion
        parts.splice(parts.length - 2, 1);
      }
      return parts.join('.');
    }
    return filename;
  };

  
  
  const getFileIcon = (filePath) => {
    const extension = filePath.split('.').pop().toLowerCase();
    if(extension === 'py' || extension === 'ipynb') {
      return ( 
        <img
          src={python}
          alt="Python"
          style={{ height: '19px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}></img>);
    }
    if (extension === 'pdf') {
      return (
        <img
          src={pdfIcon}
          alt="PDF"
          style={{ height: '21px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}
        />
      );
    }
    if (extension === 'ppt' || extension === 'pptx') {
      return (
        <img
          src={pptIcon}
          alt="PPT"
          style={{ height: '17px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}
        />
      );
    }
    if(extension === 'zip') {
      return (
        <img
          src={zipIcon}
          alt="ZIP"
          style={{ height: '19px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}
        />
      );
    }
    if(extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      return (
        <img
          src={jpgIcon}
          alt="JPG"
          style={{ height: '23px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}
        />
      );}
    return null;
  };
  

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
  {/* {technologies.map((tech, index) => (
    <ListGroup.Item 
      key={index}
      className="theme-aware-listitem"
    >
      {tech}
    </ListGroup.Item>
  ))} */}
</ListGroup>
          <div className="mt-auto d-flex justify-content-center">
          <Button 
  variant="primary"
  onClick={handleShow}
  className="theme-aware-link"
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
{(extendedDescription || description).split('\n\n').map((paragraph, paraIdx) => (
  <div key={paraIdx}>
    {paragraph.startsWith('•') ? (
      <ul className="list-unstyled mb-4">
{paragraph.split('\r').map((line, lineIdx) => (
  <li key={`${paraIdx}-${lineIdx}`} className="mb-2">
  <i className="bi bi-asterisk me-2" style={{ 
    fontSize: '0.6rem',
    fontWeight: 'lighter',
    opacity: '0.7'
  }}></i>
  {line.replace('•', '').trim()}
</li>
))}
      </ul>
    ) : (
      <p key={paraIdx} className="mb-3">{paragraph}</p>
    )}
  </div>
))}
          
          <h5>Technologies Used</h5>
          <ul className="mb-4">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
               {/* New: List downloadable files if available */}
               {files && files.length > 0 && (
            <>
              <h5>Downloadable Files</h5>
              <ul className="list-unstyled mb-4">
                {files.map((file, index) => (
                  <li key={index}>
                    <a href={file} download={getDownloadName(file)}>
                    {getFileIcon(file)}{getDownloadName(file)}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="text-center">
          {githubLink && githubLink.startsWith('https://git')  ? (
            <Button 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary"
            >
              <img 
                src={theme === 'dark' ? darkModeGit : lightModeGit} 
                alt="GitHub" 
                style={{ 
                  height: '25px', 
                  width: 'auto', 
                  marginRight: '8px',
                  verticalAlign: 'middle'
                }} 
              />
              View on GitHub
            </Button>
          ) : (
            <Button 
            href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary"
            >
             
              View Project Website
            </Button>
          )}
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