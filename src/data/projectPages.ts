import { ProjectPage } from '../utils/types';

export const projectPageList: ProjectPage[] = [
  {
    id: '1',
    name: 'Border Measures Analytics',
    status: 'closed',
    description:
      'Power BI dashboard for analyzing data related to the Canadian border in response to the COVID-19 pandemic',
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
    status: 'closed',
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
    status: 'closed',
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
  },
  {
    id: '4',
    name: 'National Wastewater Surveillance Platform',
    status: 'active',
    description:
      'Development of a Protected B cloud-based data platform to support COVID-19 case surveillance',
    importantLink: {
      label: 'Access the public dashboard',
      url: 'https://health-infobase.canada.ca/covid-19/wastewater/'
    },
    background: [
      'The virus that causes COVID-19 infection can be detected by testing and monitoring wastewater (sewage) of infected people, without the need for individual testing.',
      'Wastewater surveillance can also be used to monitor the circulation of variants of concern and can be used as an early indicator for the presence of COVID-19 infections not yet detected by traditional clinical surveillance.',
      'In addition to COVID-19, wastewater surveillance can be used to monitor other public health threats, including the presence of antimicrobial resistance, additional communicable diseases (e.g. Tuberculosis) and chemical markers indicating the health of a community (e.g. the use of opioids).'
    ],
    problem:
      'No existing centralised and national database of wastewater COVID-19 test results, along with inconsistency in data received and reported by sites across Canada. There is a large effort for cleaning and transforming the data into a standard format, with no existing data validation, sharing agreement, or dissemination processes.',
    goal: 'Platform that can be used by laboratories and municipalities to share data and have it transformed into a standard format without an additional effort on their part.',
    solution:
      'The waster surveillance project includes: a data collection tool that enables edit/validation rules to get a structured and consistent data, a national wastewater SQL database with a secure API endpoint, dashboards to visualize data for external and internal clients,and data sharing agreements and dissemination processes to control the risk of disclosure when publishing data.',
    images: ['projects/wastewater_1.png', 'projects/wastewater_2.png'],
    cardImage: 'projects/wastewater_stock.jpg',
    tools: [
      'Power Apps',
      'Power BI',
      'Azure Databricks',
      'Azure Data Factory',
      'Azure SQL Database',
      'Azure API Management',
      'LiquidFiles',
      'GitHub'
    ]
  },
  {
    id: '5',
    name: 'Monkeypox Outbreak Project',
    status: 'active',
    description:
      'A data platform to manage and transform Monkeypox data collected from provinces and territories',
    background: [
      'The Federal (DMIA and Epidemiologists within PHAC), Provincial, and Territorial partners are working collaboratively on this project to monitor and respond to the monkeypox outbreak in Canada.',
      'It involves building and maintaining a data platform to manage and transform data collected from provinces and territories, and to provide a central repository for data analysis and reporting.'
    ],
    problem:
      'Epidemiologists need clean and standardized data from provinces and territories so they can analyze and report key monkeypox variables to Canadians and to the World Health Organization (WHO).',
    goal: 'The goal is a system that collects and cleans national monkeypox data received from provinces and territories, and allows the data to be shared for analysis and reporting.',
    solution:
      'The monkeypox project aims to build an integrated national surveillance system that analyzes and monitors the number of monkeypox cases, detects any trends or patterns, and informs effective public health actions through reports and dashboards.',
    images: [],
    cardImage: 'projects/monkeypox_stock.jpg',
    tools: [
      'Power BI',
      'Azure Databricks',
      'Azure Data Factory',
      'Azure SQL Database',
      'Azure Blob Storage',
      'LiquidFiles'
    ]
  },
  {
    id: '6',
    name: 'NACI Databricks Analysis',
    status: 'active',
    description:
      'A cloud computing platform to support NACI analysis and model training of vaccine simulations',
    background: [
      'The National Advisory Committee on Immunization (NACI) Secretariat will be developing a series of infections disease and health economic models to conduct cost-effectiveness analyses of vaccination programs in support of national vaccine recommendations by NACI. This forms a core piece of the operational work performed by the NACI Secretariat on an ongoing basis.'
    ],
    problem:
      'The models will simulate various scenarios of infections from vaccine-preventable diseases, the health consequences of those infections, and the effects of vaccination over long periods. As many of these models will carry a significant computational burden, the NACI Secretariat is requesting the use of a cloud server(s) to run these simulations.',
    goal: 'Provide NACI a high performance computing environment and storage capacity to carry out infectious disease modeling and analytical work.',
    solution:
      'A combination of an Azure Virtual Machine, Azure Databricks, and Azure Blob Storage',
    images: [],
    cardImage: 'projects/cloud_computer_stock.jpg',
    tools: ['Azure Virtual Machine', 'Azure Databricks', 'Azure Blob Storage']
  },
  {
    id: '7',
    name: 'Opioid Modelling Project',
    status: 'closed',
    description:
      'A simulation model that provides the number of opioid-related deaths that might occur.',
    background: [
      'The Public Health Agency of Canada (PHAC) developed a simulation model of opioid-related deaths that provides information on the number of these deaths that might occur during the COVID-19 outbreak in 2020 through to December 2022.',
      'Models use mathematical equations to estimate how many cases of a disease or health event may occur in the coming weeks or months. They help researchers simulate real-world possibilities in a virtual environment.'
    ],
    problem:
      'The opioid overdose crisis continues to have significant impacts on people living in Canada. Data from several jurisdictions across Canada and PHAC show a substantial increase in opioid-related harms and deaths since the beginning of the COVID-19 outbreak.',
    goal: 'The goal of the Opioid Modelling Project was a collaborative project with epidemiologist from the Health Promotion and Chronic Disease Prevention Branch, to support the implementation of time-series model that tracks opioid-related deaths since COVID-19 pandemic.',
    solution:
      'PHAC developed a simulation model that provides the number of opioid-related deaths that might occur using original code from the program AnyLogic and attempting to duplicate results in RStudio, through modelling different scenarios according to different public health measures and calculating usage rates through ordinary differential equations. Model verification was done in Excel calculating error values between duplicate model and original model, and rectifying significant differences by adjusting parameter values and re-writing ODEs.',
    images: [],
    cardImage: '',
    tools: ['R', 'RStudio']
  }
];
