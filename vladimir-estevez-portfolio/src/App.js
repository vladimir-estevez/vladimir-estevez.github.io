import React from 'react';
import './App.css';

const Project = ({ title, description, technologies, githubLink }) => (
  <article>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {technologies.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
    <a href={githubLink}>GitHub Link</a>
  </article>
);

const SkillList = ({ skills }) => (
  <ul>
    {skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
);

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of your first project',
      technologies: ['React', 'Node.js'],
      githubLink: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project',
      technologies: ['Python', 'Django'],
      githubLink: '#',
    },
  ];

  const skills = [
    'Programming Languages: Java, Python, C#',
    'Web Technologies: HTML, CSS, JavaScript',
    'Databases: MySQL, MongoDB',
    'Tools: Git, VS Code',
  ];

  const contactInfo = {
    email: 'your.email@example.com',
    github: 'github.com/yourusername',
    linkedin: 'linkedin.com/in/yourprofile',
  };

  return (
    <div>
      <h1>Vladimir Estevez</h1>
      <h2>Computer Science Student</h2>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h2>About Me</h2>
      <p>Third-year Computer Science student at [Your University]. Passionate about [Your Interests].</p>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <h2>Technical Skills</h2>
      <SkillList skills={skills} />
      <h2>Contact Me</h2>
      <ul>
        <li>Email: {contactInfo.email}</li>
        <li>GitHub: <a href="#">{contactInfo.github}</a></li>
        <li>LinkedIn: <a href="#">{contactInfo.linkedin}</a></li>
      </ul>
      &copy; 2025 Your Name. All rights reserved.
    </div>
  );
}

export default App;