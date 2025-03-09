import workshopFiles from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - Instructions.pdf';
import realEmittersSource from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - The Real Emitters source code.ipynb';
import realEmittersPres from '../../files/SideProjects/DawsonDataChallenge/The Real Emitters - Challenge Submission.pptx';
import realEmittersImage from '../../images/SideProjects/DataChallenge.jpg';

export const DataJournalismChallenge = { 
    title: 'DawsCon 2023 - Data Journalism Challenge Winner',
    description: 'Award-winning data science project focused on analyzing and visualizing the real sources of greenhouse gas emissions in Canada, challenging per capita models and identifying key industrial contributors.',
    extendedDescription: `Participated in and won two major awards at the DawsCon 2023 Data Journalism Challenge, examining the fairness of per capita emission statistics and identifying where climate change mitigation efforts should be focused.\n\n
    Key Questions Addressed:\n
    • Are statistics by capita model fair?\n
    • Are we putting the right effort at the right place?\n
    • Can we remodel the data to show us where to focus?\n\n
    Methodology:\n
    Our analysis focused on extracting and analyzing data from the energy combustion industry, comparing national and sector-specific emission levels, and developing a more accurate representation by isolating sector contributions. We utilized data from Environment Canada's National Inventory Report, Alberta Government's crude oil pricing, and Statistics Canada's greenhouse gas emissions accounts.\n\n
    Key Findings and Recommendations:\n
    • Identified the need to shift environmental debate focus to key industries\n
    • Recommended stronger government regulations\n
    • Emphasized the importance of public awareness about major emission sources\n\n
    The project earned both the Technical Excellence Award for its analytical rigor and the People's Choice Award for effectively communicating complex environmental data to the public.`,
    technologies: [
        'Data Science',
        'Python',
        'Jupyter Notebook',
        'Google Colab',
        'Data Visualization',
        'Climate Data Analysis',
        'Data Journalism'
    ],
    githubLink: 'https://www.dawsoncollege.qc.ca/ai/datachallenge23/',
    image: realEmittersImage, // Add image URL if available
    youtubeUrl: '', // Add YouTube URL if available
    files: [
        workshopFiles,
        realEmittersPres,
        realEmittersSource
    ]
};

export default DataJournalismChallenge;