import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillList from '../components/SkillList';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <SkillList skills={skills} />
    </section>
  );
}

export default Skills;