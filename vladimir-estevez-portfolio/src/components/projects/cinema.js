import cinemaImage from '../../images/projects/cinema.webp';
import cinemaFile from '../../files/cinema/Cinema Database - System Design Submission.zip';
export const cinema = {
  title: 'C# and SQL Cinema Management System with Multi-Role Access',
  description: 'First major project developed for Object-Oriented Programming course - An enterprise-grade cinema management solution showcasing OOP principles through role-based access control and comprehensive administrative features.',
  extendedDescription: 'A sophisticated cinema management system developed as the first major project for Object-Oriented Programming course using C# and SQL Server, implementing a multi-tier architecture with distinct client and manager interfaces.\n\n' +
  'Key Features:\n\n' +
  '• Dual-role system with separate Manager and Client access levels\r' +
  '• Comprehensive movie and showtime management\r' +
  '• Room capacity tracking and optimization\n\n' +
  'Manager Features:\n\n' +
  '• Complete CRUD operations for movies, rooms, and showtimes\r' +
  '• Real-time sales analytics and reporting\r' +
  '• Client database management and tracking\r' +
  '• Performance metrics by movie and showtime\n\n' +
  'Client Features:\n\n' +
  '• Secure account creation and authentication\r' +
  '• Real-time showtime browsing and ticket booking\r' +
  '• Session management and booking history\n\n' +
  'Technical Implementation:\n\n' +
  '• Normalized SQL Server database with 5 core entities\r' +
  '• Windows Forms UI following design best practices\r' +
  '• Comprehensive error handling and input validation\r' +
  '• Transaction management for booking operations',
  
  technologies: [
    'C# .NET Framework',
    'SQL Server Management Studio',
    'SQL Server 2019',
    'Windows Forms',
    'LocalDB',
    'Visual Studio 2022',
    'CRUD Operations'
  ],
  githubLink: 'https://github.com/StudentChamplain/OOP-SD-Final-Project',
  image: cinemaImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=PtOQhRwPuzc',
  files: [cinemaFile]
};

export default cinema;