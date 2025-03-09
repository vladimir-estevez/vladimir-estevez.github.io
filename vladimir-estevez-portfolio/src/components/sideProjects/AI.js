import aiCryptoPres from '../../files/SideProjects/AI/First Project - Cryptocurrency Price Prediction.pptx';
import aiHousingPres from '../../files/SideProjects/AI/Second Project - Housing Price Prediction.pdf';
import workshopFiles from '../../files/SideProjects/AI/Examples of Cohort Workshops .zip';
import blueprint from '../../files/SideProjects/AI/AI Project Blueprint.pptx';
import AIimage from '../../images/SideProjects/AI.png';
import degree from '../../files/SideProjects/AI/AI Cohort - Certificate of Graduation.png';

export const AIBasedProjects = {
    title: 'AI Cohort Graduate - Presented Two Different AI-Based Projects',
    description: 'Followed the Dawson College AI-focused cohort, building two projects that leverage deep learning in time-series forecasting for real-world data.',
    extendedDescription: 'These projects demonstrate the power of deep learning across two domains:\n\n'
        + '1) A Bitcoin stock price prediction project using LSTM networks to forecast future price trends based on past market movements and trading volume.\n\n'
        + '2) A housing price prediction project leveraging a similar LSTM-based approach to model and predict real estate prices.\n\n'
        + 'Both projects highlight how AI can enhance predictive accuracy in financial and real estate scenarios.\r'
        + 'Data preprocessing was carried out using Python libraries (NumPy, pandas, scikit-learn), while TensorFlow/Keras provided the deep learning framework.\r'
        + 'Since the coding side of the project where too complex, our main focus was to be able to find projects that were already working and implement them with a database that we found online. The findings were presented at the Dawson College AI cohort, emphasizing how similar LSTM concepts can be transferred across different datasets for insightful results.',
    
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
