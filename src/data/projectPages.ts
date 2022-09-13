import { ProjectPage } from '../utils/types';

export const projectPageList: ProjectPage[] = [
  {
    id: '1',
    name: 'Border Measures Analytics',
    description:
      'Power BI dashboard for analyzing data rtelated ot the Canadian border in response to the COVID-19 pandemic',
    background: [
      'Due to the COVID-19 pandemic, different teams needed to analyze data related to the Canadian border. The data includes information on travellers going into Canada, such as their designated quarantine facilities, information on approved quarantine accommodations, and traveller follow ups to confirm quarantine rules are being complied.'
    ],
    problem:
      'A lot of analytics were based on senior management pressing needs and giving recurring stats took a lot of manual work to update and share, since so many different types of analysis were necessary.',
    goal: 'Remove manual work and move the data analysis into a more dynamic automated data system readily available to people at PHAC.',
    solution:
      'A mostly automated Power BI dashboard showing trends on all the analytics required by the teams at PHAC.',
    images: ['projects/border_measures_1.png'],
    cardImage: 'projects/border_measures_stock.jpg',
    tools: [
      'Power BI Dashboard',
      'Power BI Dataflow',
      'OneDrive Sharepoint',
      'Azure DevOps'
    ]
  },
  {
    id: '2',
    name: 'Dashboard for Immunization Related Diseases (DIRD)',
    description:
      'Using natural language processing and artificial intelligence to gather information about vaccines from various news and scientific sources',
    background: [
      'In June 2020, the Centre for Immunization and Respiratory Infectious Diseases (CIRID) approached the Data Management, Innovation and Analytics (DMIA) detailing a need for a platform that centralizes information about vaccines, interventions, and antivirals for various Immunization-related diseases.',
      'This project, when complete, provides policy and clinical guidance to epidemiologists and policy makers. It will initially focus on COVID-19 related information, and other Immunization-related diseases will be added in subsequent releases.'
    ],
    problem:
      'Evidence that informs decision-making is exponentially growing, so it is becoming increasingly difficul for human analysts to properly sort through and interpret the emerging data needed to stay abreast of the latest developments in public health.',
    goal: 'An all-encompassing platform where epidemiologists, data analysts, and decision makers can get curated data based on their needs.',
    solution:
      'Develop a dashboard that would encompass information about vaccines, interventions, and antivirals, from various news, scientific, and social media sources. Leverage natural language processing (NLP) techniques to automate current scanning processed done at PHAC.',
    images: ['projects/dird_1.gif'],
    cardImage: 'projects/dird_stock.jpg',
    tools: ['Power BI', 'Python', 'Databricks', 'Azure DevOps', 'GitHub', 'SQL']
  },
  {
    id: '3',
    name: 'Daily Epidemiological Trend Report Automation',
    description:
      'R Markdown based framework to automatically generate daily reports for the Chief Public Health Officer',
    background: [
      'The Health Portfolio Operations Centre (HPOC) is temporarily established when there is a new health crisis in place (e.g. COVID-19 pandemic). HPOC needs to provide updates to health officers and decision makers related to that health crisis to update them on the trends and data of the current situation.',
      "For the COVID-19 pandemic, for example, a daily report needs to be created with information related to cases, deaths, hospitalization rates, tests, and others. It also showcases the data split by province and comparisons to other countries, to better understand Canada's situation."
    ],
    problem:
      'Manually completing a daily report with the necessary information is time consuming and prone to human errors, as it entails manual work such as copy/pasting, processing of data, formatting, etc.',
    goal: 'Automate the generation of the daily report while still maintaining the same format and information previously established.',
    solution:
      'Development of a script that can automatically pull the latest data and generate a daily report including all the necessary trends and charts, with all the correct formatting applied.',
    images: ['projects/epi_trend_1.png', 'projects/epi_trend_2.png'],
    cardImage: 'projects/epi_trend_stock.jpg',
    tools: ['R', 'R Markdown', 'Python', 'Github'],
    successMetrics: [
      '2-3 hour daily process reduced to a few minutes',
      '3-4 weekly human errors minimized on average'
    ]
  }
];
