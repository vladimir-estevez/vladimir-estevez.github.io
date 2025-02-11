import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SkillList = ({ skills }) => (
  <ListGroup className="skills-list">
    {skills.map((skill, index) => (
      <ListGroup.Item key={index}>{skill}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default SkillList;