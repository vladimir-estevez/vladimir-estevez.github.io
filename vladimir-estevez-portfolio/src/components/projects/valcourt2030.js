import integrativeImage from '../../images/projects/integrative project.jpg';
import valcourt2030slides from '../../files/integrativeProject/Valcourt 2030 -  Presentation.pptx';
import valcourt2030report from '../../files/integrativeProject/Valcourt 2030 - Comprehensive Assesment - Report.pdf';
import valcourt2030deploy from '../../files/integrativeProject/Valcourt 2030 - Deployment Documentation.pdf';

export const valcourt2030 = {
  title: 'Integrative Project: Valcourt2030',

  description: 'A dynamic community portal that connects residents through personalized event notifications and fosters local engagement in Valcourt.',

  extendedDescription: 
    'As our final semester Integrative Project, we developed a web application for Valcourt2030 (<a>www.valcourt2030.org</a>), an NGO based in the Valcourt region of Quebec . The platform was specifically designed to bridge communication gaps between newcomers, foreign workers, and established residents in the community by streamlining notification delivery and facilitating interactions between Valcourt2030 managers and users.\n\n' +
    'At its core, the platform features an intelligent interest-based notification system where users can register their preferences and receive targeted updates about relevant community events. The powerful tag-based filtering system ensures users only receive information that matches their specific interests.\n\n' +
    'The application leverages a seamless integration with the existing WordPress infrastructure through RESTful APIs and webhook technology. This integration enables automatic event data synchronization and triggers personalized email notifications to users based on their registered interests.\n\n' +
    'For enhanced user experience, the backend implements node-cron scheduling that executes a daily task at midnight to send reminder notifications about events happening exactly three days in the future, helping community members plan accordingly.\n\n' +
    'Security is paramount in the Valcourt2030 architecture. The system implements JWT authentication with 24 hour token expiration, password hashing using bcrypt for credential protection, and comprehensive email verification protocols for new accounts. Password management includes secure reset and modification workflows with token-based verification through email confirmation. Protected routes are safeguarded by validation middleware that redirects unauthorized access attempts.\n\n' + 
    'Valcourt2030 delivers a comprehensive suite of features including intuitive user account management, multi-parameter event filtering, and attendance tracking—all designed with efficiency, accessibility, and scalability in mind to serve the diverse needs of the Valcourt community.',

  technologies: [
    // Frontend
    'ReactJS',
    'HTML/CSS3',
    'JavaScript',
    // Backend
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    // Integration
    'WordPress API',
    'Webhooks',
    // Security
    'JWT Authentication',
    'Bcrypt',
    // DevOps
    'Git-Workflow',
    'XAMPP',
    'AWS Elastic Beanstalk',
    // Utilities
  ],

  githubLink: 'https://github.com/vladimir-estevez/IntegrativeProject2024.git',
  image: integrativeImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=nCbgVUmYS0k',

  files: [
    valcourt2030deploy,
    valcourt2030report,
    valcourt2030slides
  ]
};

export default valcourt2030;