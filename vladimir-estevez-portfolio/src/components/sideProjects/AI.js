import aiCryptoPres from '../../files/SideProjects/AI/First Project - Cryptocurrency Price Prediction.pptx';
import aiHousingPres from '../../files/SideProjects/AI/Second Project - Housing Price Prediction.pdf';
import workshopFiles from '../../files/SideProjects/AI/Examples of Cohort Workshops .zip';
import blueprint from '../../files/SideProjects/AI/AI Project Blueprint.pptx';
import AIimage from '../../images/SideProjects/AI.png';
import degree from '../../files/SideProjects/AI/AI Cohort - Certificate of Graduation.png';

export const AIBasedProjects = {
    title: 'AI-Based Projects',
    description: 'Projects focused on using AI for predictive analysis in various domains.',
    extendedDescription: 'These projects leverage AI and machine learning techniques to predict prices in different sectors. The projects include AI-based cryptocurrency price prediction and AI-based housing price prediction. The goal is to demonstrate the potential of AI in making accurate predictions and aiding decision-making processes.',
    technologies: [
        'Artificial Intelligence',
        'Machine Learning',
        'Predictive Analysis',
        'Data Science',
        'Python',
        'TensorFlow',
        'Keras'
    ],
    githubLink: 'https://www.dawsoncollege.qc.ca/ai',
    image: AIimage, // Add image URL if available
    youtubeUrl: '', // Add YouTube URL if available
    files: [blueprint,
        aiCryptoPres,
        aiHousingPres,
        workshopFiles,
        degree
    ]
};

export default AIBasedProjects;