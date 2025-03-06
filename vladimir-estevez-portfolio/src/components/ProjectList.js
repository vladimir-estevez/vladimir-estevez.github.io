import portfolioImage from '../images/projects/portfolio.jpg';
import blackjackImage from '../images/projects/blackjack.jpg';
import integrativeImage from '../images/projects/integrative project.jpg';
import globalExcelImage from '../images/projects/internship.svg';
import iotEnvironmentImage from '../images/projects/iot environment.jpg';
import mobileAppImage from '../images/projects/kotlin.png';
import parkourImage from '../images/projects/parkour.webp';
import cinemaImage from '../images/projects/cinema.webp';
import wtaImage from '../images/projects/enviromental data explorer.jpg';
import gameImage from '../images/projects/gaming programing.png';
import smarthomeImage from '../images/projects/iot smart home.jpeg';
import socialmediaImage from '../images/projects/CICD.png';
import quizMultiplayerImage from '../images/projects/react_websocket.webp';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    extendedDescription: 'This portfolio website was developed using React and Bootstrap to create a responsive and modern showcase of my technical abilities and project work. I implemented custom components, responsive layouts, and interactive elements to create an engaging user experience. The site includes project filtering, dark/light mode, and optimized assets for performance.',
    technologies: ['React', 'Bootstrap', 'JavaScript'],
    githubLink: 'https://github.com/josevladimirestevez/Vladimir-Estevez-Portfolio',
    image: portfolioImage,
    youtubeUrl: null,
  },
  {
    title: 'Blackjack Game',
    description: 'Interactive blackjack card game with betting mechanics and game rules implementation.',
    extendedDescription: 'I developed this interactive Blackjack game from scratch using vanilla JavaScript, HTML5, and CSS3. The game features complete blackjack rules including splitting, doubling down, insurance bets, and dealer logic. I implemented a custom state management system to handle the complex game states, animated card dealing and chip movement, and designed a responsive interface that works across different devices. The project helped me strengthen my JavaScript skills, particularly in managing complex application state and DOM manipulation.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/JoseVladimirEstevez/Blackjack-Project',
    image: blackjackImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=eNn_3GNl5yU',
  },
  {
    title: 'Integrative Project',
    description: 'A comprehensive full-stack application that integrates multiple technologies learned throughout the program.',
    extendedDescription: 'This capstone project demonstrates my ability to create a complete full-stack application using the MERN stack. I designed and implemented a RESTful API with Node.js and Express, created a MongoDB database with Mongoose ODM, and developed a responsive front-end using React and modern JavaScript practices. The application includes user authentication with JWT, real-time notifications, file uploads, and comprehensive CRUD operations. Throughout development, I adhered to coding best practices, implemented testing, and deployed the application to a cloud platform.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/JoseVladimirEstevez/IntegrativeProject2024.git',
    image: integrativeImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=nCbgVUmYS0k',
  },
  {
    title: 'Global Excel Internship',
    description: 'Projects and contributions made during my internship at Global Excel Management.',
    extendedDescription: 'During my internship at Global Excel Management, I worked on several important internal projects using C#, .NET, and SQL Server. I developed a claims processing module that improved processing efficiency by 25%, refactored legacy code to follow modern design patterns, and contributed to the company\'s Azure migration strategy. I worked in an Agile team environment, participated in code reviews, and gained valuable experience with enterprise-level software development practices. This experience allowed me to bridge the gap between academic learning and real-world software engineering.',
    technologies: ['C#', '.NET', 'SQL Server', 'Azure'],
    githubLink: 'https://github.com/josevladimirestevez/Internship_at_Global_Excel_-_Vladimir_Estevez',
    image: globalExcelImage,
    youtubeUrl: null,
  },
  {
    title: 'IoT Environment Monitoring',
    description: 'IoT device network for environmental monitoring with dashboard visualization.',
    extendedDescription: 'This IoT project consists of a network of Arduino-based sensors that monitor environmental conditions (temperature, humidity, air quality, and light levels) and transmit data to a central Raspberry Pi hub using MQTT protocol. I developed a Python backend to process and store the sensor data, and created a real-time web dashboard to visualize the environmental metrics. The system includes alert functionality for abnormal conditions and historical data analysis. This project showcased my abilities in embedded systems programming, networking protocols, and full-stack development for IoT applications.',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT'],
    githubLink: 'https://github.com/VladimirEstevez/IoT2FinalProject.git',
    image: iotEnvironmentImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=gFJCFxc6_as',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application with user authentication and cloud database.',
    extendedDescription: 'I developed a cross-platform mobile application using React Native that allows users to create accounts, manage personal profiles, and interact with cloud-stored data. The app implements Redux for state management, Firebase for authentication and real-time database operations, and features offline functionality with data synchronization. I designed a custom UI component library for consistent styling across the application, implemented comprehensive error handling, and optimized performance for both Android and iOS platforms. This project demonstrates my ability to create professional-quality mobile applications with modern frameworks and cloud integration.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    githubLink: 'https://github.com/JoseVladimirEstevez/MobileAppFinal.git',
    image: mobileAppImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=57tOAcrAxqc',
  },
  {
    title: 'Parkour Game',
    description: '3D parkour platformer game with physics-based movement and level progression.',
    extendedDescription: 'This 3D platformer game built in Unity showcases my game development skills. I implemented a physics-based movement system with wall-running, climbing, and dynamic jumping mechanics. The game features procedurally generated obstacle courses, progressive difficulty scaling, and a scoring system. I created custom shaders for visual effects, designed and implemented particle systems, and optimized performance through efficient use of Unity\'s systems. This project demonstrates my ability to combine technical programming with game design principles to create an engaging player experience.',
    technologies: ['Unity', 'C#', '3D Modeling'],
    githubLink: 'https://github.com/VladimirEstevez/BestParcourGameEver.git',
    image: parkourImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=NDwy9Rz9Jvw',
  },
  {
    title: 'Cinema Database',
    description: 'Database management system for a cinema company with ticket sales, movie scheduling, and inventory.',
    extendedDescription: 'This comprehensive database management system for cinema operations handles everything from movie scheduling to ticket sales and inventory management. I designed the relational database schema with SQL Server, implementing normalization techniques and optimized query performance. The C# Windows Forms application provides an intuitive interface for cinema staff to manage daily operations. The system includes reporting features for business analytics, customer relationship management, and inventory tracking. This project demonstrates my ability to design complex database systems and build practical business applications with a focus on usability and performance.',
    technologies: ['SQL', 'C#', '.NET', 'Windows Forms'],
    githubLink: 'https://github.com/StudentChamplain/OOP-SD-Final-Project',
    image: cinemaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=PtOQhRwPuzc',
  },
  {
    title: 'Environmental Data Explorer',
    description: 'Data warehouse and visualization platform for global emissions and demographic data.',
    extendedDescription: 'This data engineering project focused on building an ETL pipeline and visualization platform for environmental data analysis. Using Python, Pandas, and NumPy, I designed an automated data pipeline that extracts information from multiple public datasets (CO2 emissions, nitrous oxide, methane, population demographics, and GDP), performs data transformations, and loads the processed data into a data warehouse. The system calculates derived metrics like per capita emissions and carbon intensity of economies. I implemented a web interface using Matplotlib and Seaborn for data visualization, allowing users to generate customized environmental impact reports and graphs. The application includes features for historical graph archiving, comparative analysis between countries, and automatic weekly data refreshes. This project demonstrates my skills in data engineering, ETL processes, and building data-driven applications with meaningful visualizations.',
    technologies: ['Python', 'Pandas', 'SQL', 'Matplotlib', 'Seaborn', 'ETL'],
    githubLink: 'https://github.com/JoseVladimirEstevez/FinalProjectDBTWA.git',
    image: wtaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=43VmpdmuTVk',
  },
  {
    title: 'Game Programming Project',
    description: '2D game development project showcasing core game mechanics and design principles.',
    extendedDescription: 'In this 2D game development project, I focused on implementing core game mechanics and demonstrating game design fundamentals. Using Unity and C#, I created a side-scrolling adventure game with custom character controllers, enemy AI systems, and level progression. I designed and animated sprite-based characters and environments, implemented a save/load system, and created a dynamic difficulty adjustment system based on player performance. The project includes a custom dialogue system, inventory management, and a quest tracking system. This work demonstrates my ability to combine technical programming skills with game design principles to create an engaging player experience.',
    technologies: ['Unity', 'C#', 'Game Design', 'Sprite Animation'],
    githubLink: 'https://github.com/JoseVladimirEstevez/FinalGamingPrograminProject.git/',
    image: gameImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=qZtKKsmkXsg',
  },
  {
    title: 'IoT Smart Home System',
    description: 'Connected home automation system with sensor integration and remote control features.',
    extendedDescription: 'This smart home automation system connects various IoT devices to create an integrated home control platform. I developed firmware for Arduino and ESP32 microcontrollers to interface with sensors and actuators throughout the home, implemented the MQTT messaging protocol for device communication, and created a Node.js server to manage device state and user interactions. The system features voice control integration, scheduling capabilities, energy usage monitoring, and customizable automation rules. A mobile-responsive web dashboard allows users to monitor and control their home from anywhere. This project demonstrates my ability to work with embedded systems, networking protocols, and full-stack development in an IoT context.',
    technologies: ['Arduino', 'ESP32', 'MQTT', 'Node.js'],
    githubLink: 'https://github.com/lolmile/IoTMidTerm.git',
    image: smarthomeImage,
    youtubeUrl: null,
  },
  {
    title: 'Social Media Platform',
    description: 'Full-featured social media web application with user profiles, posts, comments, and messaging.',
    extendedDescription: 'This comprehensive social media platform demonstrates my ability to build complex, interactive web applications. Using the MERN stack (MongoDB, Express, React, Node.js), I implemented core social media features including user profiles, post creation and sharing, commenting systems, and real-time messaging with Socket.io. The application includes image uploading and processing, notification systems, content moderation tools, and responsive design for mobile and desktop usage. I implemented JWT authentication, role-based access control, and security best practices throughout the application. This project showcases my full-stack development skills and ability to create feature-rich web applications that handle complex user interactions.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/VladimirEstevez/TWA2FInalProject.git',
    image: socialmediaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=fDu_EAvlN8M',
  },
  {
    title: 'Multiplayer Quiz App',
    description: 'Real-time multiplayer quiz application with WebSocket integration for simultaneous gameplay.',
    extendedDescription: 'I developed this multiplayer quiz web application using JavaScript frameworks and WebSocket technology to enable real-time interaction between multiple users. The application features separate interfaces for quiz creators (teachers) and participants (players). Teachers can create custom quiz rooms with various categories, difficulty levels, question counts, and time limits. Players join quiz sessions using unique room codes and experience synchronized question progression, real-time countdown timers, and instant feedback. The system manages concurrent user connections, maintains session state across all connected clients, and provides live leaderboards and scoring. This project demonstrates my ability to implement real-time web applications using WebSocket protocols, manage complex application state across multiple clients, and create engaging interactive experiences.',
    technologies: ['JavaScript', 'WebSocket', 'Node.js', 'Express', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/JoseVladimirEstevez/finalQuiz.git',
    image: quizMultiplayerImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=_lkzfcShq4o',
  },
];

export default projects;