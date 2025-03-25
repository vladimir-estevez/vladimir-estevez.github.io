import blackjackImage from '../../images/projects/blackjack.png';
import blackjackPresentation from '../../files/blackjack/Virtual Reality Blackjack - Presentation.pptx';
import blackjackReport from '../../files/blackjack/Virtual Reality Blackjack - Final Report.pdf';

export const blackjack = {
  title: 'Blackjack VR Game',

  description: 
    'A fully functional VR Blackjack game developed in Unity3D for the Meta Quest 2 headset, ' +
    'focusing on immersive gameplay and realistic casino simulation.',

  extendedDescription: 
    'This project was part of the "Explore New Technologies" class, where we ventured into new fields. ' +
    'As a team, we decided to explore 3D game development.\n\n' +
    'Given constraints like budget limitations, learning curves, and hardware restrictions, success was defined by achieving ' +
    'a functional and interactive VR Blackjack experience within the available timeframe.\n\n' +
    'The primary goal of this project was to develop a fully immersive VR Blackjack game tailored for the Meta Quest 2 VR headset, ' +
    'while gaining expertise in Unity3D development, VR hardware optimization, and Unity VR game builds.\n\n' +
    'The game replicates the ambiance of a real-world casino blackjack table, allowing players to interact with betting mechanics ' +
    'in a realistic 3D environment.\n\n' + 'Core features include intuitive VR controls for smooth gameplay, a robust betting system for realistic wagering, and meticulously designed scenarios that simulate the dynamic atmosphere of a casino.\n\n' + 
    'A major challenge was working with 3D visual assets, as we had no prior experience in this area. ' +
    'We learned to integrate and optimize 3D models, textures, and animations within Unity to create a polished and immersive experience.\n\n' +
    'Additionally, we focused on user experience design, game mechanics, and performance optimization for VR hardware.\n\n' +
    'Most of the coding was done in C# within Unity, and we successfully built and deployed the VR application on the Meta Quest 2. ' +
    'We also collaborated using GitHub for version control and project management.',

  technologies: [
    'Unity3D',
    'C#',
    'Meta Quest 2 VR Set',
    'VR Game Development',
    'GitHub'
  ],

  githubLink: 'https://github.com/vladimir-estevez/Blackjack-Project',
  image: blackjackImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=eNn_3GNl5yU',

  files: [
    blackjackPresentation,
    blackjackReport
  ]
};

export default blackjack;
