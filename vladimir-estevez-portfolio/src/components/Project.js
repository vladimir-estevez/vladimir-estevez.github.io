import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const Project = ({ title, description, technologies, githubLink, image }) => (
  <Card className="project">
    {image && <Card.Img variant="top" src={image} alt={title} />}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <ListGroup variant="flush">
        {technologies.map((tech, index) => (
          <ListGroup.Item key={index}>{tech}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </Button>
    </Card.Body>
  </Card>
);

export default Project;