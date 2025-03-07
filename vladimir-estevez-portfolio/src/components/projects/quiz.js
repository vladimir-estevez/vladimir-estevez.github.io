import quizMultiplayerImage from '../../images/projects/react_websocket.webp';
import quizAssingment from '../../files/quiz/Quiz Project - Assingment Instructions.zip';
import quizAnalysis from '../../files/quiz/Quiz Project Analysis - Answers.pdf';

export const quiz = {
  title: 'Multiplayer Quiz App',
  description: 'A real-time multiplayer quiz application enabling synchronized gameplay between teachers and students using WebSocket technology.',
 extendedDescription: 'This multiplayer quiz web application was developed to create an engaging educational platform that facilitates real-time interaction between teachers and students.\n\n' +
'Key Features:\n\n' +
'• Teacher Interface: Custom quiz creation with configurable categories, difficulty levels, question counts, and time limits\r' +
'• Student Experience: Easy room access via unique codes, synchronized question progression, and instant feedback\r' +
'• Real-time Components: Live leaderboard, countdown timers, and concurrent user management\r' +
'• Technical Implementation: WebSocket protocol for real-time updates, React.js for UI components, and a Node.js/Express backend\n\n' +
'Technical Challenges Overcome:\n\n' +
'• Implemented synchronized game state across multiple clients using Socket.io\r' +
'• Designed a responsive UI that adapts to both teacher and student needs\r' +
'• Created robust error handling for room management and user connections\r' +
'• Developed efficient state management for real-time score updates\n\n' +
'This project highlights my ability to build complex real-time web applications, manage concurrent user connections effectively, implement secure room-based multiplayer systems, and create intuitive interfaces for different user roles.',
  technologies: [
    'React.js',
    'Node.js',
    'Express',
    'Socket.io',
    'REST API',
    'Bootstrap 5',
    'HTML5',
    'CSS3',
    'JavaScript ES6+'
  ],
  githubLink: 'https://github.com/JoseVladimirEstevez/finalQuiz.git',
  image: quizMultiplayerImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=_lkzfcShq4o',
  files: [
    quizAssingment, 
    quizAnalysis
  ]
};

export default quiz;
