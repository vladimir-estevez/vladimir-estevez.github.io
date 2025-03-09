import wtaImage from '../../images/projects/enviromental data explorer.jpg';
import finalProjectInstructions from '../../files/greenLab/Final Project Instructions .zip';
import greenLabAppPresentation from '../../files/greenLab/Green lab Application -  Presentation .pptx';
import greenLabDatabaseProof from '../../files/greenLab/Green Lab Web Application - Data Base Proof Of Concept .pdf';
import greenLabWebProof from '../../files/greenLab/Green Lab Web Application - Proof Of Concept Web Application.pdf';

export const greenlab = {
  title: 'Climate Change Interactive Data Visualization Platform',
  description: 'A web-based application that enables dynamic data visualization by integrating the MERN stack with Python-powered ETL processes and AWS Redshift for scalable storage.',
  extendedDescription: 'This project involved developing a responsive web application that allows users to interact with and visualize data in real time. Built using the MERN stack (MongoDB, Express, React, and Node.js), the platform supports user registration, secure login, and offers a dedicated graph page for visual insights.\n\nPython was employed for ETL tasks—extracting data from CSV files with Pandas, transforming it into structured formats, and generating visualizations using Matplotlib and Seaborn. The generated graphs are saved as images on the server and served to the frontend via a GET endpoint, with the Node.js child_process library handling script execution.\n\nTo ensure security and data integrity, server-side validation is implemented with Node.js and Express, while the frontend uses HTML, CSS, and Bootstrap for a seamless, user-friendly experience. AWS Redshift was chosen for data storage due to its scalability, high-speed querying capabilities, and robust security features, making it ideal for handling large datasets and complex analytical queries.\n\nOverall, this project demonstrates full-stack development expertise, effective ETL process implementation, cloud-based data storage integration, and the ability to build data-driven web applications.',
  technologies: [
    'MERN Stack (MongoDB, Express, React, Node.js)',
    'Python',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'ETL',
    'AWS Redshift',
    'Bootstrap',
    'Node.js child_process'
  ],
  githubLink: 'https://github.com/vladimir-estevez/FinalProjectDBTWA.git',
  image: wtaImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=43VmpdmuTVk',
  files: [
    finalProjectInstructions,
    greenLabAppPresentation,
    greenLabDatabaseProof,
    greenLabWebProof
  ]
};

export default greenlab;
