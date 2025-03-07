import React from 'react';
import {  } from 'react-bootstrap';
import SkillList from '../components/SkillList';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h1 className='p-3 text-center'>Technical Skills</h1>
      <SkillList skills={skills} />
    </section>
  );
}

export default Skills;