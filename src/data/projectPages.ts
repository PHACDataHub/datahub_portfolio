import { ProjectPage } from '../utils/types';

export const projectPageList: ProjectPage[] = [
  {
    id: '0',
    name: 'Data Catalogue',
    status: 'active',
    description: '',
    images: [],
    cardImage: 'projects/data_catalogue/data_catalogue_stock.jpg',
    tools: [],
    comingSoon: true
  },
  {
    id: '1',
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
    problem: [
      'No existing centralised and national database of wastewater COVID-19 test results, along with inconsistency in data received and reported by sites across Canada',
      'There is a large effort for cleaning and transforming the data into a standard format, with no existing data validation, sharing agreement, or dissemination processes.'
    ],
    goal: [
      'Platform that can be used by laboratories and municipalities to share data and have it transformed into a standard format without an additional effort on their part.'
    ],
    solution: [
      'The waster surveillance project includes: a data collection tool that enables edit/validation rules to get a structured and consistent data, a national wastewater SQL database with a secure API endpoint, dashboards to visualize data for external and internal clients, and data sharing agreements and dissemination processes to control the risk of disclosure when publishing data.'
    ],
    images: [
      'projects/wastewater/wastewater_1.png',
      'projects/wastewater/wastewater_2.png'
    ],
    cardImage: 'projects/wastewater/wastewater_stock.jpg',
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
    id: '2',
    name: 'Anti-microbial Resistance (AMR)',
    status: 'active',
    cardImage: 'projects/Antimicrobial.jpg',
    description:
      'DMIA aims to partner with CFEZID and other Antimicrobial Resistance (AMR) or Antimicrobial Use (AMU) surveillance programs to improve public health outcomes by leveraging modern data tools',
    background: [
      'Centre for Food borne, Environmental and Zoonotic Infectious Diseases (CFEZID) uses suite of Tableau software to analyze and share information on known or newly emerging antimicrobial resistant pathogens.',
      'This tool enables CFEZID to provide automated and dynamic reporting to PHAC senior management, empowering informative decision-making.'
    ],
    problem: [
      'One of the major issues CFEZID is currently facing is not having the proper technical support within PHAC to help them maintain the Tableau Server.',
      'Moreover, they require Tableau Server to operate in a Protected B environment as the data used to build dashboards is Protected B.',
      'Furthermore, the Azure Active Directory (AAD) must be enabled for a single sign-in, which will require a reinstallation of Tableau Server into a new virtual machine (VM).',
      'Finally, CFEZID would also like assistance in publicly disseminating their dashboards.'
    ],
    goal: [
      'DMIA aims to partner with CFEZID and other AMR or AMU surveillance programs to improve public health outcomes by leveraging modern data tools, such as the suite of Tableau software, creating new data flows, redesigning ETLs and seeking new sources of data.',
      'Moreover, DMIA seeks to provide strategic direction on optimal use of data in AMR/AMU surveillance program areas.'
    ],
    solution: [
      'Data Acquisition: Setting up LiquidFiles to collect large data files that can contain data up to Protected B securely from external stakeholders.',
      'Data System Modernization: Using per built azure tools to smooth data pipelines and to automate the process that would allow for live dashboards and timelier reporting.',
      'Data Dissemination: AMR team will primarily use Tableau for their data dissemination to have interactive visualization. Additionally, with Azure Active Directory (AAD) enabled, users will be able to access other data sources available on the National Surveillance Platform.'
    ],
    images: [],
    tools: ['DevOps', 'Tableau', 'Azure Cloud']
  },
  {
    id: '3',
    name: 'Health of Canadians Report Automation',
    status: 'active',
    description:
      'An advanced and automated platform to support the annual Health of Canadians report by the Chief Public Health Officer (CPHO)',
    background: [
      'The Chief Public Health Officer is mandated to report annually on the Health of Canadians (HoC), and the HoC initiative fulfills part of that mandate.',
      'Previously, HoC reporting was done through an annual manual update of 50-60 indicators in an appendix of the CPHO report.'
    ],
    problem: [
      'The manual process was time-consuming and error-prone, and the data was not always up-to-date.',
      'The CPHO wanted to have a more advanced and automated platform to support the annual HoC report.'
    ],
    goal: [
      'While split in different phases, the overall goal is to develop a data platform and pipeline to collect, standardize, and maintain incoming data from surveillance programs to serve as the foundation for an interfactive dashboard.'
    ],
    solution: [
      'A Django web application to collect, centralize, and standardize incoming data.',
      'The platform shall also make the data available to other teams that need it in the form of exports and API endpoints, in order to further automate the development of the HoC report.'
    ],
    images: [
      'projects/cpho/hoc_diagram.png',
      'projects/cpho/cpho_1.png',
      'projects/cpho/cpho_2.png',
      'projects/cpho/cpho_3.png'
    ],
    cardImage: 'projects/cpho/cpho_stock.jpg',
    tools: ['Python', 'GitHub', 'Django', 'React', 'GraphQL', 'SQLite'],
    importantLink: {
      label: 'See past reports',
      url: 'https://www.canada.ca/en/public-health/corporate/publications/chief-public-health-officer-reports-state-public-health-canada.html'
    }
  },
  {
    id: '4',
    name: 'Integrated Threat Assessment Platform (ITAP)',
    status: 'active',
    description:
      'A data platform to support agency-wide integration to collect, store, transform, update, analyze, and disseminate public health signals/threats as they are detected.',
    background: [
      'The Centre for Integrated Risk Assessment (CIRA) was creatred to integrate public health risk assessment activities (from risk identification to risk mitication) across the Agency.',
      "The integration of signals and threats will optimize PHAC's ability to anticipate, understand, and act on public health risks to protect the health of Canadians.",
      'To achieve this, CIRA is collaborating the Data Management, Innovation, and Analytics (DMIA) team to develop an online platform that will support their goals.'
    ],
    problem: [
      'The existing e-mail/Microsoft Office-based process for collecting and sharing information on public health signals and threats can be enhanced to allow for more efficient and effective collaboration and information sharing.'
    ],
    goal: [
      'The goal is to develop a data platform to support agency-wide integration to collect, store, transform, update, analyze, and disseminate public health signals/threats as they are detected.'
    ],
    solution: [
      'Hosted in the National Surveillance Platform, the platform will allow for authorized PHAC users to access the frontend and enter data on signals and threats, which can then be shared between internal users in HC/PHAC.',
      'Furthermore, the tool will also allow for the creation and dissemination of Weekly Threat Reports to subject matter experts and senior management, including the Chief Public Health Officer, as well as allowing for robus data management and documentation for fturue analytic and auditing needs.'
    ],
    images: ['projects/cira/cira_1.png'],
    cardImage: 'projects/cira/cira_stock.jpg',
    tools: [
      'Python',
      'GitHub',
      'Azure Cloud',
      'Django',
      'Docker',
      'HTMX',
      'Jinja2',
      'PostgresQL'
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
    problem: [
      'Epidemiologists need clean and standardized data from provinces and territories so they can analyze and report key monkeypox variables to Canadians and to the World Health Organization (WHO).'
    ],
    goal: [
      'The goal is a system that collects and cleans national monkeypox data received from provinces and territories, and allows the data to be shared for analysis and reporting.'
    ],
    solution: [
      'The monkeypox project aims to build an integrated national surveillance system that analyzes and monitors the number of monkeypox cases, detects any trends or patterns, and informs effective public health actions through reports and dashboards.'
    ],
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
    name: 'Outbreak Management Database',
    status: 'active',
    description: '',
    images: [],
    cardImage: 'projects/outbreak/outbreak_stock.jpg',
    tools: [],
    comingSoon: true
  },
  {
    id: '7',
    name: 'Biosecurity Dashboard',
    status: 'active',
    description:
      'A multi-purpose PowerBI dashboard to support a variety of management needs for the Centre for Biosecurity team.',
    background: [
      'The Centre for Biosecurity had an operational dashboard they would make yearly in PDF, using Excel spreadsheets with data from CRM.',
      "The dashboard tracked high-level summary of highlights, the volume and type of application processed in a given time range, the program's performance against established service standards, etc."
    ],
    problem: [
      'The Centre for Biosecurity team wanted to have a more advanced dashboard and data management process using PowerBI, as the current process depended too much on manual processing.'
    ],
    goal: [
      'One dashboard to suit their needs to cover multiple years, with filtering, sorting, and other general features to support the analysis they need.'
    ],
    solution: [
      'A PowerBI dashboard to have a better process for data management, making it easier to update the dashboard when new information arrives.',
      'The dashboard contains interactive buttons and filters, a shareable link to a persistent report on the web, visuals, and pages to support the variety of needs of the Centre for Biosecurity team.'
    ],
    images: [
      'projects/biosecurity/biosecurity_1.png',
      'projects/biosecurity/biosecurity_3.png',
      'projects/biosecurity/biosecurity_4.png',
      'projects/biosecurity/biosecurity_5.png',
      'projects/biosecurity/biosecurity_6.png',
      'projects/biosecurity/biosecurity_7.png'
    ],
    cardImage: 'projects/biosecurity/biosecurity_stock.jpeg',
    tools: ['PowerBI', 'Excel']
  },
  {
    id: '8',
    name: 'Border Measures Analytics',
    status: 'closed',
    description:
      'Power BI dashboard for analyzing data related to the Canadian border in response to the COVID-19 pandemic',
    background: [
      'Due to the COVID-19 pandemic, different teams needed to analyze data related to the Canadian border.',
      'The data includes information on travellers going into Canada, such as their designated quarantine facilities, information on approved quarantine accommodations, and traveller follow ups to confirm quarantine rules are being complied.'
    ],
    problem: [
      'A lot of analytics were based on senior management pressing needs and giving recurring stats took a lot of manual work to update and share, since so many different types of analysis were necessary.'
    ],
    goal: [
      'Remove manual work and move the data analysis into a more dynamic automated data system readily available to people at PHAC.'
    ],
    solution: [
      'A mostly automated Power BI dashboard showing trends on all the analytics required by the teams at PHAC.'
    ],
    images: ['projects/borders/border_measures_1.png'],
    cardImage: 'projects/borders/border_measures_stock.jpg',
    tools: [
      'Power BI Dashboard',
      'Power BI Dataflow',
      'OneDrive Sharepoint',
      'Azure DevOps'
    ]
  },
  {
    id: '9',
    name: 'Opioid Modelling Project',
    status: 'closed',
    description:
      'A simulation model that provides the number of opioid-related deaths that might occur.',
    background: [
      'The Public Health Agency of Canada (PHAC) developed a simulation model of opioid-related deaths that provides information on the number of these deaths that might occur during the COVID-19 outbreak in 2020 through to December 2022.',
      'Models use mathematical equations to estimate how many cases of a disease or health event may occur in the coming weeks or months. They help researchers simulate real-world possibilities in a virtual environment.'
    ],
    problem: [
      'The opioid overdose crisis continues to have significant impacts on people living in Canada. Data from several jurisdictions across Canada and PHAC show a substantial increase in opioid-related harms and deaths since the beginning of the COVID-19 outbreak.'
    ],
    goal: [
      'The goal of the Opioid Modelling Project was a collaborative project with epidemiologist from the Health Promotion and Chronic Disease Prevention Branch, to support the implementation of time-series model that tracks opioid-related deaths since COVID-19 pandemic.'
    ],
    solution: [
      'PHAC developed a simulation model that provides the number of opioid-related deaths that might occur using original code from the program AnyLogic and attempting to duplicate results in RStudio, through modelling different scenarios according to different public health measures and calculating usage rates through ordinary differential equations.',
      'Model verification was done in Excel calculating error values between duplicate model and original model, and rectifying significant differences by adjusting parameter values and re-writing ODEs.'
    ],
    images: [],
    cardImage: 'projects/Opioid_Modelling.jpg',
    tools: ['R', 'RStudio']
  },
  {
    id: '10',
    name: 'Daily Epidemiological Trend Report Automation',
    status: 'closed',
    description:
      'R Markdown based framework to automatically generate daily reports for the Chief Public Health Officer',
    background: [
      'The Health Portfolio Operations Centre (HPOC) is temporarily established when there is a new health crisis in place (e.g. COVID-19 pandemic). HPOC needs to provide updates to health officers and decision makers related to that health crisis to update them on the trends and data of the current situation.',
      "For the COVID-19 pandemic, for example, a daily report needs to be created with information related to cases, deaths, hospitalization rates, tests, and others. It also showcases the data split by province and comparisons to other countries, to better understand Canada's situation."
    ],
    problem: [
      'Manually completing a daily report with the necessary information is time consuming and prone to human errors, as it entails manual work such as copy/pasting, processing of data, formatting, etc.'
    ],
    goal: [
      'Automate the generation of the daily report while still maintaining the same format and information previously established.'
    ],
    solution: [
      'Development of a script that can automatically pull the latest data and generate a daily report including all the necessary trends and charts, with all the correct formatting applied.'
    ],
    images: [
      'projects/epi_trend/epi_trend_1.png',
      'projects/epi_trend/epi_trend_2.png'
    ],
    cardImage: 'projects/epi_trend/epi_trend_stock.jpg',
    tools: ['R', 'R Markdown', 'Python', 'Github'],
    successMetrics: [
      '2-3 hour daily process reduced to a few minutes',
      '3-4 weekly human errors minimized on average'
    ]
  },
  {
    id: '11',
    name: 'COVIDTrends',
    status: 'closed',
    description:
      'COVID Trends is a tool that provides summary data about COVID-19 in your area.',
    problem: [
      'Canadians need to be empowered with knowledge and tools to support informed decision-making on public health matters relevant to them and that promote healthy behaviour change.'
    ],
    goal: [
      'The goal of the COVIDTrends project was to provite Canadians with access to timely public health information from trusted sources based on their community health dynamics.'
    ],
    solution: [
      'A web application to deliver tailored local COVID-19 information to Canadians.',
      'The tool plays a role in influencing behaviours and adherence to public health measures by providing Canadians with case/death count, trends, and vaccination rates broken down by health region.',
      'It also helps Canadians identify and connect directly with local public health authorities for more detailed COVID-19 information in their geographical area of interest.'
    ],
    images: [
      'projects/covidtrends/covidtrends_1.png',
      'projects/covidtrends/covidtrends_2.png'
    ],
    cardImage: 'projects/covidtrends/covidtrends_stock.webp',
    tools: ['Node.js', 'Webpack', 'JavaScript', 'HTML', 'CSS', 'D3'],
    importantLink: {
      url: 'https://health-infobase.canada.ca/covid-19/covidtrends/?HR=1&mapOpen=false',
      label: 'Check the tool out'
    }
  },
  {
    id: '12',
    name: 'Dashboard for Immunization Related Diseases (DIRD)',
    status: 'closed',
    description:
      'Using natural language processing and artificial intelligence to gather information about vaccines from various news and scientific sources',
    background: [
      'In June 2020, the Centre for Immunization and Respiratory Infectious Diseases (CIRID) approached the Data Management, Innovation and Analytics (DMIA) detailing a need for a platform that centralizes information about vaccines, interventions, and antivirals for various Immunization-related diseases.',
      'This project, when complete, provides policy and clinical guidance to epidemiologists and policy makers. It will initially focus on COVID-19 related information, and other Immunization-related diseases will be added in subsequent releases.'
    ],
    problem: [
      'Evidence that informs decision-making is exponentially growing, so it is becoming increasingly difficul for human analysts to properly sort through and interpret the emerging data needed to stay abreast of the latest developments in public health.'
    ],
    goal: [
      'An all-encompassing platform where epidemiologists, data analysts, and decision makers can get curated data based on their needs.'
    ],
    solution: [
      'Develop a dashboard that would encompass information about vaccines, interventions, and antivirals, from various news, scientific, and social media sources.',
      'Leverage natural language processing (NLP) techniques to automate current scanning processed done at PHAC.'
    ],
    images: ['projects/dird/dird_1.gif'],
    cardImage: 'projects/dird/dird_stock.jpg',
    tools: ['Power BI', 'Python', 'Databricks', 'Azure DevOps', 'GitHub', 'SQL']
  },
  {
    id: '13',
    name: 'Surveillance IT Infrastructure Renewal (SITIR)',
    status: 'active',
    description:
      'The SITIR project recommends how to plan and build out surveillance systems and infrastructure for moving PHAC towards a modern data analytics environment.',
    background: [
      'PHAC surveillance systems rely on numerous information technology (IT) infrastructure components and software tools, including databases, statistical analysis programs, and communication applications, to collect, analyze, store, and disseminate public health information.'
    ],
    problem: [
      "According to PHAC audit reports conducted to date ('Corporate Data Management Initiative Technical Infrastructure Report', 2015, 'Audit of Surveillance at the Public Health Agency of Canada', 2019), surveillance information systems and infrastructure need improvement as there are issues with surveillance data transmission and processing, uninterrupted availability, as well as reliability and adoptability."
    ],
    goal: [
      'The Project Charter entitled Surveillance IT Infrastructure Renewal (SITIR) identified the need for a Surveillance IT Infrastructure Renewal project.',
      'The purpose of this project is to prepare recommendations for surveillance systems infrastructure improvements, which would serve as a base requirement for the development and implementation phase of surveillance infrastructure renovation effort.'
    ],
    solution: [
      'The project will produce a Conceptual Architecture Proposal, IT Support and Transition Plan recommendation documents after a detailed evaluation of public health surveillance operational needs, and corresponding system infrastructure inefficiencies and gaps is conducted.'
    ],
    cardImage: 'projects/SITIR.jpg',
    images: [],
    tools: []
  },
  {
    id: '14',
    name: 'COVID-19 Confirmed Cases Report',
    status: 'closed',
    description:
      'The report provides data on the COVID-19 cases to help monitor outbreaks and support the analysis of and response to the pandemic.',
    background: [
      'Throughout the COVID-19 pandemic, provincial and territorial public health agencies collaborated with PHAC, providing data on the COVID-19 cases, in order to help monitor outbreaks and support the analysis of and response to the pandemic.'
    ],
    problem: [
      'The provinces and territories need cleaned, standardized and aggregate data of the key COVID-19 variables to analyze the impact of the COVID-19 confirmed cases.'
    ],
    goal: [
      "The goal is a report that shares the data and data visualizations of the respective province's or territory's COVID-19 confirmed cases."
    ],
    solution: [
      'This report, which analyzes the COVID-19 confirmed case data and presents data visualizations on the key variables of interest, was made available to the provincial and territorial public health agencies to support their analysis and reporting',
      'This report provides additional insight of the province and territory data as compared to the national data.'
    ],
    images: [],
    cardImage: 'projects/covid_case/covidcasereport.jpg',
    tools: [
      'Azure Data',
      'Factory',
      'Azure SQL Database',
      'Azure Blob Storage',
      'Power BI'
    ]
  }
];
