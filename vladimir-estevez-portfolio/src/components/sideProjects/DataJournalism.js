import workshopFiles from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - Instructions.pdf';
import realEmittersSource from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - The Real Emitters source code.ipynb';
import realEmittersPres from '../../files/SideProjects/DawsonDataChallenge/The Real Emitters - Challenge Submission.pptx';
import realEmittersImage from '../../images/SideProjects/DataChallenge.jpg';

export const DataJournalismChallenge = { 
    title: 'DawsCon 2023 - Data Journalism Challenge Winner',
    description: 'Award-winning data science project focused on analyzing and visualizing the real sources of greenhouse gas emissions in Canada, challenging per capita models and identifying key industrial contributors.',
    extendedDescription: 'Participated in and won two major awards at the DawsCon 2023 Data Journalism Challenge, examining the fairness of per capita emission statistics and identifying where climate change mitigation efforts should be focused.\r'
        + '\n\n'
        + 'Key Questions Addressed:\n\n'
        + '• Are statistics by capita model fair?\n\n'
        + '• Are we putting the right effort at the right place?\n\n'
        + '• Can we remodel the data to show us where to focus?\n\n'
        + '\n\n'
        + 'Methodology:\n\n'
        + 'Utilized multiple CSV datasets (household emissions, industrial emissions, population counts) to generate DataFrames covering 2009-2019.\n\n'
        + 'Merged these DataFrames to compare total Canadian emissions and stationary combustion sources, using Python (pandas, seaborn, matplotlib) for data manipulation and visualization in Google Colab.\n\n'
        + 'Stacked bar charts and line charts highlighted the difference between household emissions, industrial sources, and combined totals.\n\n'
        + '\n\n'
        + 'Key Findings and Recommendations:\n\n'
        + '• Identified the need to shift environmental debate focus to key industries\n\n'
        + '• Recommended stronger government regulations\n\n'
        + '• Emphasized the importance of public awareness about major emission sources\n\n'
        + '\n\n'
        + 'The project earned both the Technical Excellence Award for its analytical rigor and the People\'s Choice Award for effectively communicating complex environmental data to the public.',
    
    technologies: [
        'Data Science',
        'Python',
        'Pandas',
        'Seaborn',
        'Matplotlib',
        'Jupyter Notebook',
        'Google Colab',
        'Data Visualization',
        'Climate Data Analysis',
        'Data Journalism'
    ],
    githubLink: 'https://www.dawsoncollege.qc.ca/ai/datachallenge23/',
    image: realEmittersImage, 
    youtubeUrl: '', 
    files: [
        workshopFiles,
        realEmittersPres,
        realEmittersSource
    ]
};

export default DataJournalismChallenge;
