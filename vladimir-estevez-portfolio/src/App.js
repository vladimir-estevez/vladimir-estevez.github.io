import React from 'react';
import './App.css';

const Project = ({ title, description, technologies, githubLink, image }) => (
  <article className="project">
    {image && <img src={image} alt={title} />}
    <h3>{title}</h3>
    <p>{description}</p>
    <ul className="technologies">
      {technologies.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      View on GitHub
    </a>
  </article>
);

const SkillList = ({ skills }) => (
  <ul className="skills-list">
    {skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
);

function App() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],pau
      githubLink: 'https://github.com/yourusername/portfolio',
      image: '/images/portfolio.png', // Replace with an actual image
    },
    {
      title: 'E-commerce Store',
      description: 'Developed a fully functional e-commerce platform with user authentication and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      image: '/images/ecommerce.png', // Replace with an actual image
    },
    {
      title: 'Task Management App',
      description: 'A task management application to organize and track tasks.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubLink: 'https://github.com/yourusername/task-manager',
      image: '/images/taskmanager.png', // Replace with an actual image
    },
  ];

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'HTML',
    'CSS',
    'Git',
    'RESTful APIs',
    'SQL',
    'Python',
    'C#',
  ];

  const contactInfo = {
    email: 'jvestev@gmail.com',
    github: 'github.com/josevladimirestevez',
    linkedin: 'linkedin.com/in/yourprofile',
    resume: '/resume.pdf', // Add a link to your resume
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Vladimir Estevez</h1>
        <h2>Web and Software Developer</h2>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          2024 Computer Science Graduate at Champlain College - Passionate about Full-Stack Web and Software development.
          I am a highly motivated and skilled web and software developer with a passion for creating innovative and user-friendly
          applications. With experience in React, Node.js, and other modern technologies, I am eager to contribute to a dynamic
          team and build impactful solutions.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <SkillList skills={skills} />
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <ul>
          <li>
            Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
            GitHub: <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer">
              {contactInfo.github}
            </a>
          </li>
          <li>
            LinkedIn: <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
              {contactInfo.linkedin}
            </a>
          </li>
          <li>
            Resume: <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        &copy; 2025 Vladimir Estevez. All rights reserved.
      </footer>
    </div>
  );
}

export default App;