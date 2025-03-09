import socialmediaImage from '../../images/projects/CICD.png';
import cicdAssignment from '../../files/cicd/CI CD Report Instructions.pdf';
import cicdAnswers from '../../files/cicd/CI CD Documentation.pdf';

export const cicd = {
  title: 'CI/CD Pipeline Implementation for Open Source Project',

  description: 
    'Implementation of a comprehensive GitLab CI/CD pipeline for an existing open-source social media application, ' +
    'with automated testing, documentation, and AWS deployment.',

  extendedDescription: 
    'This project focused on DevOps practices and CI/CD implementation rather than application development.\n\n' +
    'Starting with an existing open-source social media application, we successfully configured the MongoDB database connection ' +
    'and then built a complete GitLab CI/CD pipeline.\n\n' +
    'The pipeline consists of six carefully orchestrated stages:\n\n' +
    '• Installation: Automated dependency management for both server and client.\n\n' +
    '• Linting: Automated code quality checks with ESLint, generating HTML reports.\n\n' +
    '• Documentation: Automated JSDoc generation for API documentation.\n\n' +
    '• Build: Creation of production-ready React frontend bundles.\n\n' +
    '• Bundle: Application packaging using 7-Zip.\n\n' +
    '• Deploy: Automated deployment to AWS using S3 and Elastic Beanstalk.\n\n' +
    'Key achievements include setting up automated artifact generation, implementing secure AWS deployment processes, ' +
    'and establishing a reliable continuous deployment workflow.\n\n' +
    'The project demonstrates expertise in DevOps practices, cloud deployment strategies, and CI/CD pipeline configuration.',

  technologies: [
    'GitLab CI/CD',
    'AWS Elastic Beanstalk',
    'AWS S3',
    'MongoDB',
    'ESLint',
    'JSDoc',
    'Node.js'
  ],

  githubLink: 'https://gitlab.com/VladimirEstevez/twa2finalproject',
  image: socialmediaImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=fDu_EAvlN8M',

  files: [
    cicdAssignment,
    cicdAnswers
  ]
};

export default cicd;
