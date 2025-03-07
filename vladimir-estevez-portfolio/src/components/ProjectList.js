import blackjack from './projects/blackjack.js';
import cicd from './projects/cicd.js';
import cinema from './projects/cinema.js';
import gamingProgramming from './projects/gamingprograming.js';
import greenlab from './projects/greenlab.js';
import iotEnvironment from './projects/iotEnvironment.js';
// import iotSmartHome from './projects/iotSmartHome.js';
import mobileapp from './projects/mobileapp.js';
import parkour from './projects/parkour.js';
import quiz from './projects/quiz.js';
import valcourt2030 from './projects/valcourt2030.js';

const projects = [
  valcourt2030,
  blackjack,
  greenlab,
  cicd,
  quiz,
  mobileapp,
  cinema,
  iotEnvironment,
  parkour,
  gamingProgramming,
  // iotSmartHome
];

export default projects;


// import portfolioImage from '../images/projects/portfolio.jpg';
// import blackjackImage from '../images/projects/blackjack.png';
// import integrativeImage from '../images/projects/integrative project.jpg';
// import globalExcelImage from '../images/projects/internship.svg';
// import iotEnvironmentImage from '../images/projects/iot environment.jpg';
// import mobileAppImage from '../images/projects/kotlin.png';
// import parkourImage from '../images/projects/parkour.webp';
// import cinemaImage from '../images/projects/cinema.webp';
// import wtaImage from '../images/projects/enviromental data explorer.jpg';
// import gameImage from '../images/projects/gaming programing.png';
// import smarthomeImage from '../images/projects/iot smart home.jpeg';
// import socialmediaImage from '../images/projects/CICD.png';
// import quizMultiplayerImage from '../images/projects/react_websocket.webp';
// import valcourt2030slides from '../files/integrativeProject/Valcourt 2030 -  Presentation.pptx'
// import valcourt2030report from '../files/integrativeProject/Valcourt 2030 - Comprehensive Assesment - Report.pdf'
// import valcourt2030deploy from '../files/integrativeProject/Valcourt 2030 - Deployment Documentation.pdf'
// import blackjackPresentation from '../files/blackjack/Virtual Reality Blackjack - Presentation.pptx'
// import blackjackReport from '../files/blackjack/Virtual Reality Blackjack - Final Report.pdf'
// import finalProjectInstructions from '../files/greenLab/Final Project Instructions .zip';
// import greenLabAppPresentation from '../files/greenLab/Green lab Application -  Presentation .pptx';
// import greenLabDatabaseProof from '../files/greenLab/Green Lab Web Application - Data Base Proof Of Concept .pdf';
// import greenLabWebProof from '../files/greenLab/Green Lab Web Application - Proof Of Concept Web Application.pdf';
// import cicdAssignment from '../files/cicd/CI CD Pipeline - Assignment Instructions.pdf';
// import quizAssingment from '../files/quiz/Quiz Project - Assingment Instructions.zip';
// import quizAnalysis from '../files/quiz/Quiz Project Analysis - Answers.pdf';



// const projects = [
//   // {
//   //   title: 'Personal Portfolio Website',
//   //   description: 'A personal portfolio website to showcase my skills and projects.',
//   //   extendedDescription: 'This portfolio website was developed using React and Bootstrap to create a responsive and modern showcase of my technical abilities and project work. I implemented custom components, responsive layouts, and interactive elements to create an engaging user experience. The site includes project filtering, dark/light mode, and optimized assets for performance.',
//   //   technologies: ['React', 'Bootstrap', 'JavaScript'],
//   //   githubLink: 'https://github.com/josevladimirestevez/Vladimir-Estevez-Portfolio',
//   //   image: portfolioImage,
//   //   youtubeUrl: null,
//   // }, {
//     {
//       title: 'Integrative Project: Valcourt2030',
//       description: 'A dynamic web portal that fosters community engagement and streamlines local event notifications for Valcourt2030.',
//       extendedDescription: 'Valcourt2030 is a comprehensive web application developed to enhance community engagement for newcomers, foreign workers, and long-time residents. The platform enables personalized notifications through interest-based user registration and features a robust tag-based system to inform users about upcoming local events.\n\nIt seamlessly integrates with an existing WordPress site via API and webhooks—automatically receiving event data and sending email notifications to users with matching interests. Additionally, the backend utilizes node-cron to schedule a daily task that runs at midnight, notifying all registered users about events occurring in exactly three days.\n\nWith features including user account management, event filtering by tags and dates, and registration tracking, Valcourt2030 is designed for efficiency, usability, and scalability, making community information accessible to everyone.'

//       technologies: [
//         'HTML/CSS3',
//         'JavaScript',
//         'Git Workflow',
//         'ReactJS',
//         'WordPress',
//         'Webhooks',
//         'XAMPP',
//         'NodeJS',
//         'ExpressJS',
//         'node-cron',
//         'MongoDB',
//         'AWS Elastic Beanstalk'
//       ],
//       githubLink: 'https://github.com/JoseVladimirEstevez/IntegrativeProject2024.git',
//       image: integrativeImage,
//       youtubeUrl: 'https://www.youtube.com/watch?v=nCbgVUmYS0k',
//       files: [
//         valcourt2030deploy,
//         valcourt2030report,
//         valcourt2030slides
//       ]
//     }
// ,    
    
//     {
//       title: "Blackjack VR Game",
//       description: "A fully functional VR Blackjack game developed in Unity3D for the Meta Quest 2 headset, focusing on immersive gameplay and realistic casino simulation.",
//       extendedDescription: "This project was part of the 'Explore New Technologies' class, where we explored new fields, as a team we decided to chose 3D game development. Given constraints like budget limitations, learning curves, and hardware restrictions, success was defined by achieving a functional and interactive VR Blackjack experience within the available timeframe. \n\n The primary goal of this project was to develop a fully immersive VR Blackjack game tailored for the Meta Quest 2 Virtual Reality set while gaining expertise in Unity3D development, VR hardware optimization, and Unity VR game builds. The game replicates the ambiance of a real-world casino blackjack table, allowing players to interact with betting mechanics in a realistic 3D environment. Core features include intuitive VR controls, a robust betting system, and animated card dealing. \n\n A major challenge was working with 3D visual assets, as we had no prior experience in this area. We learned to integrate and optimize 3D models, textures, and animations within Unity to create a polished and immersive experience. Additionally, we focused on user experience design, game mechanics, and performance optimization for VR hardware. Most of the coding was done in C# within Unity, and we learned how to build and deploy VR applications successfully on the Meta Quest 2. We also collaborated using GitHub for version control and project management.",
//       technologies: ["Unity3D", "C#", "Meta Quest 2 VR Set", "VR Game Development", "VR Android Builds", "GitHub"],
//       githubLink: "https://github.com/JoseVladimirEstevez/Blackjack-Project",
//       image: blackjackImage,
//       youtubeUrl: "https://www.youtube.com/watch?v=eNn_3GNl5yU",
//       files: [blackjackPresentation, blackjackReport]
//     },
//     {
//       title: 'Interactive Data Visualization Platform',
//       description: 'A web-based application that enables dynamic data visualization by integrating the MERN stack with Python-powered ETL processes and AWS Redshift for scalable storage.',
//       extendedDescription: 'This project involved developing a responsive web application that allows users to interact with and visualize data in real time. Built using the MERN stack (MongoDB, Express, React, and Node.js), the platform supports user registration, secure login, and offers a dedicated graph page for visual insights.\n\nPython was employed for ETL tasks—extracting data from CSV files with Pandas, transforming it into structured formats, and generating visualizations using Matplotlib and Seaborn. The generated graphs are saved as images on the server and served to the frontend via a GET endpoint, with the Node.js child_process library handling script execution.\n\nTo ensure security and data integrity, server-side validation is implemented with Node.js and Express, while the frontend uses HTML, CSS, and Bootstrap for a seamless, user-friendly experience. AWS Redshift was chosen for data storage due to its scalability, high-speed querying capabilities, and robust security features, making it ideal for handling large datasets and complex analytical queries.\n\nOverall, this project demonstrates full-stack development expertise, effective ETL process implementation, cloud-based data storage integration, and the ability to build data-driven web applications.',
//       technologies: [
//           'MERN Stack (MongoDB, Express, React, Node.js)',
//           'Python',
//           'Pandas',
//           'Matplotlib',
//           'Seaborn',
//           'ETL',
//           'AWS Redshift',
//           'Bootstrap',
//           'Node.js child_process'
//       ],
//       githubLink: 'https://github.com/JoseVladimirEstevez/FinalProjectDBTWA.git',
//       image: wtaImage,
//       youtubeUrl: 'https://www.youtube.com/watch?v=43VmpdmuTVk',
//       files: [finalProjectInstructions,
//         greenLabAppPresentation,
//         greenLabDatabaseProof,
//         greenLabWebProof]
//   }
  
// ,    
// {
//   title: 'CI/CD Pipeline Implementation for Open Source Project',
//   description: 'Implementation of a comprehensive GitLab CI/CD pipeline for an existing open-source social media application, with automated testing, documentation, and AWS deployment.',
//   extendedDescription: 'This project focused on DevOps practices and CI/CD implementation rather than application development. Starting with an existing open-source social media application, we successfully configured the MongoDB database connection and then built a complete GitLab CI/CD pipeline.\n\nThe pipeline consists of six carefully orchestrated stages:\n\n- Installation: Automated dependency management for both server and client\n- Linting: Automated code quality checks with ESLint, generating HTML reports\n- Documentation: Automated JSDoc generation for API documentation\n- Build: Creation of production-ready React frontend bundles\n- Bundle: Application packaging using 7-Zip\n- Deploy: Automated deployment to AWS using S3 and Elastic Beanstalk\n\nKey achievements include setting up automated artifact generation, implementing secure AWS deployment processes, and establishing a reliable continuous deployment workflow. The project demonstrates expertise in DevOps practices, cloud deployment strategies, and CI/CD pipeline configuration.',
//   technologies: [
//       'GitLab CI/CD',
//       'AWS Elastic Beanstalk',
//       'AWS S3',
//       'MongoDB',
//       'ESLint',
//       'JSDoc',
//       'Node.js'
//   ],
//   githubLink: 'https://gitlab.com/VladimirEstevez/twa2finalproject',
//   image: socialmediaImage, // Add your pipeline screenshot
//   youtubeUrl: 'https://www.youtube.com/watch?v=fDu_EAvlN8M',
//   files: [ cicdAssignment
//   ]
// },


// {
//   title: 'Multiplayer Quiz App',
//   description: 'A real-time multiplayer quiz application enabling synchronized gameplay between teachers and students using WebSocket technology.',
//   extendedDescription: 'This multiplayer quiz web application was developed to create an engaging educational platform that facilitates real-time interaction between teachers and students.\n\nKey Features:\n• **Teacher Interface**: Custom quiz creation with configurable categories, difficulty levels, question counts, and time limits.\n• **Student Experience**: Easy room access via unique codes, synchronized question progression, and instant feedback.\n• **Real-time Components**: Live leaderboard, countdown timers, and concurrent user management.\n• **Technical Implementation**: WebSocket protocol for real-time updates, React.js for UI components, and a Node.js/Express backend.\n\nTechnical Challenges Overcome:\n• Implemented synchronized game state across multiple clients using Socket.io.\n• Designed a responsive UI that adapts to both teacher and student needs.\n• Created robust error handling for room management and user connections.\n• Developed efficient state management for real-time score updates.\n\nThis project highlights my ability to build complex real-time web applications, manage concurrent user connections effectively, implement secure room-based multiplayer systems, and create intuitive interfaces for different user roles.',
//   technologies: [
//     'React.js',
//     'Node.js',
//     'Express',
//     'Socket.io',
//     'REST API',
//     'Bootstrap 5',
//     'HTML5',
//     'CSS3',
//     'JavaScript ES6+'
//   ],
//   githubLink: 'https://github.com/JoseVladimirEstevez/finalQuiz.git',
//   image: quizMultiplayerImage,
//   youtubeUrl: 'https://www.youtube.com/watch?v=_lkzfcShq4o',
  
// files:[quizAssingment, quizAnalysis]},
 
//   // {
//   //   title: 'Global Excel Internship',
//   //   description: 'Projects and contributions made during my internship at Global Excel Management.',
//   //   extendedDescription: 'During my internship at Global Excel Management, I worked on several important internal projects using C#, .NET, and SQL Server. I developed a claims processing module that improved processing efficiency by 25%, refactored legacy code to follow modern design patterns, and contributed to the company\'s Azure migration strategy. I worked in an Agile team environment, participated in code reviews, and gained valuable experience with enterprise-level software development practices. This experience allowed me to bridge the gap between academic learning and real-world software engineering.',
//   //   technologies: ['C#', '.NET', 'SQL Server', 'Azure'],
//   //   githubLink: 'https://github.com/josevladimirestevez/Internship_at_Global_Excel_-_Vladimir_Estevez',
//   //   image: globalExcelImage,
//   //   youtubeUrl: null,
//   // files:[]},
//   {
//     title: 'IoT Environment Monitoring',
//     description: 'IoT device network for environmental monitoring with dashboard visualization.',
//     extendedDescription: 'This IoT project consists of a network of Arduino-based sensors that monitor environmental conditions (temperature, humidity, air quality, and light levels) and transmit data to a central Raspberry Pi hub using MQTT protocol. I developed a Python backend to process and store the sensor data, and created a real-time web dashboard to visualize the environmental metrics. The system includes alert functionality for abnormal conditions and historical data analysis. This project showcased my abilities in embedded systems programming, networking protocols, and full-stack development for IoT applications.',
//     technologies: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT'],
//     githubLink: 'https://github.com/VladimirEstevez/IoT2FinalProject.git',
//     image: iotEnvironmentImage,
//     youtubeUrl: 'https://www.youtube.com/watch?v=gFJCFxc6_as',
//   files:[]},
//   {
//     title: 'Mobile App Development',
//     description: 'Cross-platform mobile application with user authentication and cloud database.',
//     extendedDescription: 'I developed a cross-platform mobile application using React Native that allows users to create accounts, manage personal profiles, and interact with cloud-stored data. The app implements Redux for state management, Firebase for authentication and real-time database operations, and features offline functionality with data synchronization. I designed a custom UI component library for consistent styling across the application, implemented comprehensive error handling, and optimized performance for both Android and iOS platforms. This project demonstrates my ability to create professional-quality mobile applications with modern frameworks and cloud integration.',
//     technologies: ['React Native', 'Firebase', 'Redux'],
//     githubLink: 'https://github.com/JoseVladimirEstevez/MobileAppFinal.git',
//     image: mobileAppImage,
//     youtubeUrl: 'https://www.youtube.com/watch?v=57tOAcrAxqc',
//   files:[]},
//   {
//     title: 'Parkour Game',
//     description: '3D parkour platformer game with physics-based movement and level progression.',
//     extendedDescription: 'This 3D platformer game built in Unity showcases my game development skills. I implemented a physics-based movement system with wall-running, climbing, and dynamic jumping mechanics. The game features procedurally generated obstacle courses, progressive difficulty scaling, and a scoring system. I created custom shaders for visual effects, designed and implemented particle systems, and optimized performance through efficient use of Unity\'s systems. This project demonstrates my ability to combine technical programming with game design principles to create an engaging player experience.',
//     technologies: ['Unity', 'C#', '3D Modeling'],
//     githubLink: 'https://github.com/VladimirEstevez/BestParcourGameEver.git',
//     image: parkourImage,
//     youtubeUrl: 'https://www.youtube.com/watch?v=NDwy9Rz9Jvw',
//   files:[]},
  // {
  //   title: 'Cinema Database',
  //   description: 'Database management system for a cinema company with ticket sales, movie scheduling, and inventory.',
  //   extendedDescription: 'This comprehensive database management system for cinema operations handles everything from movie scheduling to ticket sales and inventory management. I designed the relational database schema with SQL Server, implementing normalization techniques and optimized query performance. The C# Windows Forms application provides an intuitive interface for cinema staff to manage daily operations. The system includes reporting features for business analytics, customer relationship management, and inventory tracking. This project demonstrates my ability to design complex database systems and build practical business applications with a focus on usability and performance.',
  //   technologies: ['SQL', 'C#', '.NET', 'Windows Forms'],
  //   githubLink: 'https://github.com/StudentChamplain/OOP-SD-Final-Project',
  //   image: cinemaImage,
  //   youtubeUrl: 'https://www.youtube.com/watch?v=PtOQhRwPuzc',
  // files:[]},

//   {
//     title: 'Game Programming Project',
//     description: '2D game development project showcasing core game mechanics and design principles.',
//     extendedDescription: 'In this 2D game development project, I focused on implementing core game mechanics and demonstrating game design fundamentals. Using Unity and C#, I created a side-scrolling adventure game with custom character controllers, enemy AI systems, and level progression. I designed and animated sprite-based characters and environments, implemented a save/load system, and created a dynamic difficulty adjustment system based on player performance. The project includes a custom dialogue system, inventory management, and a quest tracking system. This work demonstrates my ability to combine technical programming skills with game design principles to create an engaging player experience.',
//     technologies: ['Unity', 'C#', 'Game Design', 'Sprite Animation'],
//     githubLink: 'https://github.com/JoseVladimirEstevez/FinalGamingPrograminProject.git/',
//     image: gameImage,
//     youtubeUrl: 'https://www.youtube.com/watch?v=qZtKKsmkXsg',
//   files:[]},
//   {
//     title: 'IoT Smart Home System',
//     description: 'Connected home automation system with sensor integration and remote control features.',
//     extendedDescription: 'This smart home automation system connects various IoT devices to create an integrated home control platform. I developed firmware for Arduino and ESP32 microcontrollers to interface with sensors and actuators throughout the home, implemented the MQTT messaging protocol for device communication, and created a Node.js server to manage device state and user interactions. The system features voice control integration, scheduling capabilities, energy usage monitoring, and customizable automation rules. A mobile-responsive web dashboard allows users to monitor and control their home from anywhere. This project demonstrates my ability to work with embedded systems, networking protocols, and full-stack development in an IoT context.',
//     technologies: ['Arduino', 'ESP32', 'MQTT', 'Node.js'],
//     githubLink: 'https://github.com/lolmile/IoTMidTerm.git',
//     image: smarthomeImage,
//     youtubeUrl: null,
//   files:[]},

// ];

