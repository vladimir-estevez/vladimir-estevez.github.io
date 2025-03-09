import aiCryptoPres from '../../files/SideProjects/AI/First Project - Cryptocurrency Price Prediction.pptx';
import aiHousingPres from '../../files/SideProjects/AI/Second Project - Housing Price Prediction.pdf';
import workshopFiles from '../../files/SideProjects/AI/Examples of Cohort Workshops .zip';
import blueprint from '../../files/SideProjects/AI/AI Project Blueprint.pptx';
import AIimage from '../../images/SideProjects/AI.png';
import degree from '../../files/SideProjects/AI/AI Cohort - Certificate of Graduation.png';

export const AIBasedProjects = {
    title: 'AI Cohort - Two Different AI-Based Projects',
    description: 'Followed the Dawson College AI-focused cohort, building two projects that leverage deep learning in time-series forecasting for real-world data.',
    extendedDescription: 'As part of the Dawson College AI cohort, I completed comprehensive coursework on Machine Learning and Deep Learning fundamentals, including LLMs (Large Language Models), Linear Regression techniques, and essential Python programming skills. Our culminating assignment was to develop an AI Project Blueprint—a detailed guide outlining the methodology and considerations for implementing an AI solution to address real-world problems.\n\n' +
        'Working collaboratively across two different teams, I contributed to projects that showcase the potential of deep learning in time-series forecasting across two distinct domains:\n\n' +
        '1) A Bitcoin price prediction system utilizing LSTM (Long Short-Term Memory) neural networks to forecast cryptocurrency market trends by analyzing historical price movements and trading volumes.\n\n' +
        '2) A housing market analysis tool that applies similar LSTM architecture to model and predict real estate price fluctuations based on historical data and market indicators.\n\n' +
        'Both projects demonstrated how advanced AI techniques can significantly enhance predictive accuracy in volatile financial markets and complex real estate scenarios. The technical implementation involved extensive data preprocessing using Python\'s scientific stack (NumPy, pandas, scikit-learn), while the neural network models were built with TensorFlow and Keras.\n\n' +
        'Our approach focused on adapting and implementing existing well-established models with carefully curated datasets sourced online, allowing us to concentrate on the practical applications and interpretations rather than algorithm development from scratch. The projects\' findings and insights were formally presented to faculty and peers at the Dawson College AI cohort, receiving positive feedback for their practical application of AI concepts.',
    
    technologies: [
        'Artificial Intelligence',
        'Machine Learning',
        'Time Series Forecasting',
        'Deep Learning',
        'Python',
        'NumPy',
        'pandas',
        'scikit-learn',
        'TensorFlow',
        'Keras'
    ],
    githubLink: 'https://www.dawsoncollege.qc.ca/ai',
    image: AIimage,
    youtubeUrl: '',
    files: [
        blueprint,
        aiCryptoPres,
        aiHousingPres,
        workshopFiles,
        degree
    ]
};

export default AIBasedProjects;
