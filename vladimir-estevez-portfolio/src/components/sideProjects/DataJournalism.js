import workshopFiles from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - Instructions.pdf';
import realEmittersSource from '../../files/SideProjects/DawsonDataChallenge/Data Journalism Challenge - The Real Emitters source code.ipynb';
import realEmittersPres from '../../files/SideProjects/DawsonDataChallenge/The Real Emitters - Challenge Submission.pptx';
import realEmittersImage from '../../images/SideProjects/DataChallenge.jpg';

export const DataJournalismChallenge = { 
    title: 'DawsCon 2023 - Data Journalism Challenge Winner',
    description: 'Award-winning data science project focused on climate change visualization and analysis, earning both the Technical Excellence and People\'s Choice awards at the DawsCon 2023 Data Journalism Challenge.',
    extendedDescription: `Participated in and won two major awards at the DawsCon 2023 Data Journalism Challenge, where we explored climate change data through innovative data science approaches. The project earned the Technical Award for demonstrating exceptional technical skills and the People's Choice Award based on public voting.\n\n
    Overview:\n
    Our winning submission addressed one of the most urgent challenges of our century - climate change mitigation. We focused on understanding emission sources and their evolution over time, utilizing advanced data science tools to parse massive datasets and create compelling interactive visualizations.\n\n
    Project Achievement:\n
    In the DawsCon – DawsonAI data challenge, we transformed complex CO2 emissions data from Canadian provinces into accessible visual narratives for the general public. Inspired by Our World in Data's approach, we developed impactful data visualizations that resonated with both technical judges and the general audience, leading to our dual award victory.\n\n
    The project demonstrated how effective data visualization can influence informed decision-making about climate change and environmental preservation, earning recognition for both its technical sophistication and public engagement.`,
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