import parkourImage from '../../images/projects/parkour.jpg';
import parkourAssingment from '../../files/parkour/Parkour Game - Assignment Instructions .pdf';

export const parkour = {
  title: 'BestParcourGameEver',
  description: 'A 3D parkour platformer built with Godot Engine featuring physics-based movement in an urban environment.',
  extendedDescription: 
    'A dynamic 3D parkour game developed using Godot 4, showcasing advanced game development techniques and physics-based gameplay. The project features:\n\n' +
    '• Detailed urban environment with city-themed assets including buildings, roads, and interactive objects\r' +
    '• Physics-based movement system with custom mass and inertia properties for realistic character control\r' +
    '• Dynamic collectible system with coins and scoring mechanics\r' +
    '• Advanced 3D environment setup with procedural sky, dynamic lighting, and shadow systems\r' +
    '• Custom collision layers for precise interaction between player and environment\r' +
    '• Moving platform mechanics for engaging parkour challenges\r' +
    '• Integrated UI system for gameplay feedback and score tracking\r' +
    '• Atmospheric audio implementation with background music',
  technologies: [
    'Godot Engine 4',
    'GDScript',
    '3D Modeling',
    'Physics Programming',
    'Scene Management',
    'Asset Integration',
    'Environment Design'
  ],
  githubLink: 'https://github.com/VladimirEstevez/BestParcourGameEver.git',
  image: parkourImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=NDwy9Rz9Jvw',
  files: [parkourAssingment]
};

export default parkour;