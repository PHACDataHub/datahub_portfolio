import { InventoryTool, OtherTool, Product, ProjectPage } from "../types";

export const otherUsefulToolsList: OtherTool[] = [
  { name: "RStudio", url: "https://rstudio.com/" },
  { name: "SourceTree", url: "https://www.sourcetreeapp.com/" },
  { name: "PgAdmin", url: "https://www.pgadmin.org/" },
  { name: "VS Code", url: "https://code.visualstudio.com/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "7-Zip", url: "https://www.7-zip.org/" },
  { name: "Anaconda", url: "https://www.anaconda.com/" },
  { name: "Notepad++", url: "https://notepad-plus-plus.org/" },
  { name: "Rocket Chat", url: "https://rocket.chat/" },
  { name: "Firefox", url: "https://www.mozilla.org/en-US/firefox/new/" },
];

export const toolInventoryList: InventoryTool[] = [
  {
    name: "QGIS",
    categories: ["Mapping"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.qgis.org/en/site/",
    self_hosted_version: false,
    teams: [],
    projects: [],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg",
  },
  {
    name: "R",
    categories: [
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Mapping",
    ],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.r-project.org/",
    self_hosted_version: false,
    teams: ["Data Management, Innovation and Analytics (DMIA)", "CIRID"],
    projects: ["CIRID Epitrend Reports"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/512px-R_logo.svg.png",
  },
  {
    name: "Power BI",
    categories: ["Data Visualization"],
    cost: "Per user/month fee",
    protected_b_data: true,
    url: "https://powerbi.microsoft.com/en-us/",
    self_hosted_version: true,
    teams: [
      "Data Management, Innovation and Analytics (DMIA)",
      "Compliance Enforcement",
    ],
    projects: [
      "Border Measures",
      "Dashboard for Immunization Related Diseases (DIRD)",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Python",
    categories: [
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Mapping",
    ],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.python.org/",
    self_hosted_version: false,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: [
      "Border Measures",
      "Dashboard for Immunization Related Diseases (DIRD)",
      "Wastewater Project",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Azure DevOps",
    categories: ["Project Management", "Code Repository"],
    cost: "Depends on usage case",
    protected_b_data: true,
    url: "https://azure.microsoft.com/en-ca/services/devops/",
    self_hosted_version: true,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: [
      "Border Measures",
      "National Surveillance Project",
      "Dashboard for Immunization Related Diseases (DIRD)",
    ],
    image:
      "https://149765861.v2.pressablecdn.com/wp-content/uploads/2020/01/devops.png",
  },
  {
    name: "Azure Blob Storage",
    categories: ["File Storage"],
    cost: "Depends on usage case",
    protected_b_data: true,
    url: "https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction",
    self_hosted_version: true,
    teams: ["Data Management, Innovation and Analytics (DMIA)", "CIRID"],
    projects: [
      "Border Measures",
      "Wastewater Project",
      "National Surveillance Project",
    ],
    image:
      "https://images.ctfassets.net/3lmzp7rq9ytt/2GfvIyMz5Dd99vje52s3Gg/533b0b337103dfe3783733ab168584da/azure-storage-blob--v1.png",
  },
  {
    name: "GitHub",
    categories: ["Project Management", "Code Repository"],
    cost: "Free",
    protected_b_data: false,
    url: "https://github.com/",
    self_hosted_version: false,
    teams: ["Data Management, Innovation and Analytics (DMIA)", "CIRID"],
    projects: ["CIRID Epitrend Reports", "Wastewater Project"],
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Tableau",
    categories: ["Data Visualization"],
    cost: "Per user/month fee",
    protected_b_data: true,
    url: "https://www.tableau.com/",
    self_hosted_version: false,
    teams: [],
    projects: [],
    image:
      "https://seeklogo.com/images/T/tableau-software-logo-F1CE2CA54A-seeklogo.com.png",
  },
  {
    name: "Draw.io",
    categories: ["Diagram Creation"],
    cost: "Free",
    protected_b_data: false,
    url: "https://app.diagrams.net/",
    self_hosted_version: false,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: ["National Surveillance Project"],
    image:
      "https://drawio-app.com/wp-content/uploads/2021/05/drawio_logo_RGB_symbol_large.png",
  },
  {
    name: "SQL",
    categories: ["Data Cleaning", "Data Storage", "Data Retrieval"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.sql.org/",
    self_hosted_version: true,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: [
      "Dashboard for Immunization Related Diseases (DIRD)",
      "Border Measures",
    ],
    image: process.env.PUBLIC_URL + "/images/tools/sql_database.png",
  },
  {
    name: "Django",
    categories: ["Web Development", "Data Collection"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.djangoproject.com/",
    self_hosted_version: true,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: [],
    image: process.env.PUBLIC_URL + "/images/tools/django_logo.png",
  },
  {
    name: "Azure Data Factory",
    categories: [
      "Data Integration",
      "Data Transformation",
      "Data Transfer",
      "Data Cleaning",
    ],
    cost: "Depends on usage case",
    protected_b_data: true,
    url: "https://azure.microsoft.com/en-ca/services/data-factory/",
    self_hosted_version: true,
    teams: ["Data Management, Innovation and Analytics (DMIA)"],
    projects: ["Border Measures"],
    image: process.env.PUBLIC_URL + "/images/tools/adf_logo.png",
  },
  {
    name: "D3",
    categories: ["Data Visualization", "Data Analysis", "Dashboard Creation"],
    cost: "Free",
    protected_b_data: false,
    url: "https://d3js.org/",
    self_hosted_version: true,
    teams: ["Infobase"],
    projects: [],
    image: process.env.PUBLIC_URL + "/images/tools/d3_logo.svg",
  },
];

export const projectPages: ProjectPage[] = [
  {
    id: "1",
    name: "Border Measures Analytics",
    description:
      "Power BI dashboard for analyzing data rtelated ot the Canadian border in response to the COVID-19 pandemic",
    background: [
      "Due to the COVID-19 pandemic, different teams needed to analyze data related to the Canadian border. The data includes information on travellers going into Canada, such as their designated quarantine facilities, information on approved quarantine accommodations, and traveller follow ups to confirm quarantine rules are being complied.",
    ],
    problem:
      "A lot of analytics were based on senior management pressing needs and giving recurring stats took a lot of manual work to update and share, since so many different types of analysis were necessary.",
    goal: "Remove manual work and move the data analysis into a more dynamic automated data system readily available to people at PHAC.",
    solution:
      "A mostly automated Power BI dashboard showing trends on all the analytics required by the teams at PHAC.",
    images: ["projects/border_measures_1.png"],
    cardImage: "projects/border_measures_stock.jpg",
    tools: [
      "Power BI Dashboard",
      "Power BI Dataflow",
      "OneDrive Sharepoint",
      "Azure DevOps",
    ],
  },
  {
    id: "2",
    name: "Dashboard for Immunization Related Diseases (DIRD)",
    description:
      "Using natural language processing and artificial intelligence to gather information about vaccines from various news and scientific sources",
    background: [
      "In June 2020, the Centre for Immunization and Respiratory Infectious Diseases (CIRID) approached the Data Management, Innovation and Analytics (DMIA) detailing a need for a platform that centralizes information about vaccines, interventions, and antivirals for various Immunization-related diseases.",
      "This project, when complete, provides policy and clinical guidance to epidemiologists and policy makers. It will initially focus on COVID-19 related information, and other Immunization-related diseases will be added in subsequent releases.",
    ],
    problem:
      "Evidence that informs decision-making is exponentially growing, so it is becoming increasingly difficul for human analysts to properly sort through and interpret the emerging data needed to stay abreast of the latest developments in public health.",
    goal: "An all-encompassing platform where epidemiologists, data analysts, and decision makers can get curated data based on their needs.",
    solution:
      "Develop a dashboard that would encompass information about vaccines, interventions, and antivirals, from various news, scientific, and social media sources. Leverage natural language processing (NLP) techniques to automate current scanning processed done at PHAC.",
    images: ["projects/dird_1.gif"],
    cardImage: "projects/dird_stock.jpg",
    tools: [
      "Power BI",
      "Python",
      "Databricks",
      "Azure DevOps",
      "GitHub",
      "SQL",
    ],
  },
  {
    id: "3",
    name: "Daily Epidemiological Trend Report Automation",
    description:
      "R Markdown based framework to automatically generate daily reports for the Chief Public Health Officer",
    background: [
      "The Health Portfolio Operations Centre (HPOC) is temporarily established when there is a new health crisis in place (e.g. COVID-19 pandemic). HPOC needs to provide updates to health officers and decision makers related to that health crisis to update them on the trends and data of the current situation.",
      "For the COVID-19 pandemic, for example, a daily report needs to be created with information related to cases, deaths, hospitalization rates, tests, and others. It also showcases the data split by province and comparisons to other countries, to better understand Canada's situation.",
    ],
    problem:
      "Manually completing a daily report with the necessary information is time consuming and prone to human errors, as it entails manual work such as copy/pasting, processing of data, formatting, etc.",
    goal: "Automate the generation of the daily report while still maintaining the same format and information previously established.",
    solution:
      "Development of a script that can automatically pull the latest data and generate a daily report including all the necessary trends and charts, with all the correct formatting applied.",
    images: ["projects/epi_trend_1.png", "projects/epi_trend_2.png"],
    cardImage: "projects/epi_trend_stock.jpg",
    tools: ["R", "R Markdown", "Python", "Github"],
    successMetrics: [
      "2-3 hour daily process reduced to a few minutes",
      "3-4 weekly human errors minimized on average",
    ],
  },
];

export const products: Product[] = [
  // {
  //   name: "Databricks",
  //   image:
  //     "https://www.brighttalk.com/wp-content/uploads/2019/07/Databricks-logo-1.png",
  // },
  {
    name: "LimeSurvey",
    cardImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Limesurvey_logo.png",
    slogan: "A SaaS data collection tool",
    description: [
      "LimeSurvey is a SaaS tool used for data collection, as part of the National Surveillance Platform (NSP). DMIA is using version 3.22.6 of the community version of LimeSurvey, which means it is open-source and is installed on our own Canadian servers within the HC/PHAC network. LimeSurvey allows users to create forms in both official languages and, as of version 3, the tool has been deemed WCAP compliant.",
      "LimeSurvey is currently being used to collect quantitative and qualitative data on topics ranging from public health surveillance to program assessment. Examples of projects that currently utilize or have utilized LimeSurvey include, but are not limited to, the Maritime Declaration of Health and the corresponding Annexes, the Review of the Yellow Fever Vaccination Centre Designation Program, the PHAC Incident Notification Form as part of the COVID-19 Border Measures Analytics project, etc.",
    ],
    url: "https://www.limesurvey.org/",
    images: [
      "products/LimeSurvey_01.PNG",
      "products/LimeSurvey_02.PNG",
      "products/LimeSurvey_03.PNG",
      "products/LimeSurvey_04.PNG",
      "products/LimeSurvey_05.PNG",
    ],
  },
  // {
  //   name: "LiquidFiles",
  //   image:
  //     "https://man.liquidfiles.com/assets/images/logo_144x144-362aae5506940de69ed13cf4f518a9d20ca5271f4e82934de4e31cb04f03a37a.png",
  // },
];
