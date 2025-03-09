
import integrativeImage from '../../images/projects/integrative project.jpg';
import valcourt2030slides from '../../files/integrativeProject/Valcourt 2030 -  Presentation.pptx';
import valcourt2030report from '../../files/integrativeProject/Valcourt 2030 - Comprehensive Assesment - Report.pdf';
import valcourt2030deploy from '../../files/integrativeProject/Valcourt 2030 - Deployment Documentation.pdf';

export const valcourt2030 = {
  title: 'Integrative Project: Valcourt2030',
  description: 'A dynamic web portal that fosters community engagement and streamlines local event notifications for Valcourt2030.',
  extendedDescription: 'Valcourt2030 is a comprehensive web application developed to enhance community engagement for newcomers, foreign workers, and long-time residents. The platform enables personalized notifications through interest-based user registration and features a robust tag-based system to inform users about upcoming local events.\n\nIt seamlessly integrates with an existing WordPress site via API and webhooks—automatically receiving event data and sending email notifications to users with matching interests. Additionally, the backend utilizes node-cron to schedule a daily task that runs at midnight, notifying all registered users about events occurring in exactly three days.\n\nWith features including user account management, event filtering by tags and dates, and registration tracking, Valcourt2030 is designed for efficiency, usability, and scalability, making community information accessible to everyone.',
  technologies: [
    'HTML/CSS3',
    'JavaScript',
    'Git Workflow',
    'ReactJS',
    'WordPress',
    'Webhooks',
    'XAMPP',
    'NodeJS',
    'ExpressJS',
    'node-cron',
    'MongoDB',
    'AWS Elastic Beanstalk'
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
