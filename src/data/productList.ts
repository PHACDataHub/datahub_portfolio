import { Product } from '../utils/types';

export const productList: Product[] = [
  {
    name: 'LiquidFiles',
    cardImage:
      'https://www.liquidfiles.com/assets/images/logo_144x144-d98c0ac3d4357ea5b7ab89eab17e16e47f220ca5c56f1272d40745e78eb094c3c16b2fc7d9e0a03a9244a49e25a6964a1f6f64d8187cd55e2a37285c8dac7aac.png',
    slogan: 'Send Large Files: Fast, Easy, Secure and Affordable',
    description: [
      'LiquidFiles is a virtual application that allows for the electronic exchange of files of any size with both internal and external parties. DMIA has version 3.6.7 installed on our HC/PHAC private Azure cloud, which means we can send files up to Protected B.',
      'LiquidFiles is currently being used for a variety of projects to securely transfer sensitive information to and from external and internal parties. This includes transfers of large video files (<20 GBs files) that cannot be done through email. Some examples of projects that have utilized LiquidFiles are Covid Cases, Monkeypox, Quarantine Act Traveller Verification, Traveller Information and Symptoomolgy Data, Omicron Data, Vaccine Shipment Information, Vaccine Reports, Boarder Measures, ArriveCAN Reporting, and Vector Borne Diseases.'
    ],
    categories: ['File Transmission'],
    url: 'https://www.liquidfiles.com/',
    images: [
      'products/liquidfiles/LiquidFiles_01.png',
      'products/liquidfiles/LiquidFiles_02.png',
      'products/liquidfiles/LiquidFiles_03.png'
    ],
    color: '#64afe6'
  },
  {
    name: 'Databricks',
    cardImage:
      'https://www.brighttalk.com/wp-content/uploads/2019/07/Databricks-logo-1.png',
    slogan: "The world's most powerful data science platform",
    description: [
      'Databricks is a web-based platform for working with Spark that provides automated cluster management and notebook style workspaces. Spark APIs allow users to program in their choice of several languages, such as python, R, Scala, SQL, while taking advantage of Spark’s distributed processing system for computing large volumes of data and automated cluster management allows users to easily scale up or down computational resources. There is also the ability to launch an RStudio server hosted on a Databricks cluster for R users familiar with the RStudio interface and functionality.',
      'Databricks is currently being used extensively for analytical work, as well as for ETL processes. Examples of projects that currently utilize or have utilized Databricks include, but are not limited to the Covid Border Measures Analytics Project, Monkey Pox and Wastewater surveillance, etc. Teams outside of DMIA have made use of the environment for completing analytical work as well, and it has proved to be a reliable tool for collaboration and secure data sharing.'
    ],
    categories: ['Data Science', 'Big Data', 'Machine Learning'],
    url: 'https://www.databricks.com/',
    images: [
      'products/databricks/Databricks_01.png',
      'products/databricks/Databricks_02.png'
    ],
    color: '#eb4a33'
  },
  {
    name: 'LimeSurvey',
    cardImage:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Limesurvey_logo.png',
    slogan: 'Turn questions into answers',
    categories: ['Data Collection'],
    description: [
      'LimeSurvey is an Infrastructure as a Service (IaaS) tool used for data collection, as part of the National Surveillance Platform (NSP). DMIA is using version 3.22.6 of the community version of LimeSurvey, which means it is open-source and is installed on our own Canadian servers within the HC/PHAC network. LimeSurvey allows users to create forms in both official languages and, as of version 3, the tool has been deemed WCAG compliant.',
      'LimeSurvey is currently being used to collect quantitative and qualitative data on topics ranging from public health surveillance to program assessment. Examples of projects that currently utilize or have utilized LimeSurvey include, but are not limited to, the Maritime Declaration of Health and the corresponding Annexes, the Review of the Yellow Fever Vaccination Centre Designation Program, the PHAC Incident Notification Form as part of the COVID-19 Border Measures Analytics project, etc.'
    ],
    url: 'https://www.limesurvey.org/',
    images: [
      'products/limesurvey/LimeSurvey_01.PNG',
      'products/limesurvey/LimeSurvey_02.PNG',
      'products/limesurvey/LimeSurvey_03.PNG',
      'products/limesurvey/LimeSurvey_04.PNG',
      'products/limesurvey/LimeSurvey_05.PNG'
    ],
    color: '#3b9900'
  },
  {
    name: 'Tableau',
    cardImage:
      'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png',
    slogan: 'Analytics for everyone, from anywhere',
    description: [
      'Tableau is an excellent data visualization and business intelligence tool used for reporting and analyzing vast volumes of data. Tableau Server, which is installed on the HC/PHAC Microsoft Azure tenant. To ensure data confidentiality and security, administrators of Tableau Server can manage user access levels. ',
      'Tableau is currently in the deployment phase, used in the AMR project, and will be put to use in other future projects as a DMIA product'
    ],
    categories: ['Data Analysis', 'Data Visualization'],
    url: 'https://www.tableau.com/',
    images: [
      'products/tableau/tableau04.png',
      'products/tableau/tableau03.png',
      'products/tableau/tableau01.png',
      'products/tableau/tableau02.png'
    ],
    color: '#d97c3f',
    comingSoon: true
  },
  {
    name: 'PowerBI',
    cardImage:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    slogan: 'Bring Your Data to Life',
    description: [
      'DMIA procured PowerBI (PBI) in 2020 as a reporting tool in response to the need for internal facing centralized reporting due to the COVID-19 pandemic.',
      "Since then, the Digital Transformation Branch (DTB) has taken over ownership of PBI as a product. DMIA is one of PHAC's primary users of PBI and leverages the tool to collaborate and train other program areas for their reporting needs. For example, the DMIA People and Culture team in collaboration with Health Canada's CDO offers training through With You With Me (WYWM) to other groups within PHAC and HC. We have collaborated with the National Microbiology Laboratory (NML), Canadian Border Services Agency (CBSA), and various program areas within the Health Security and Rgional Operations Branch (HSROB), such as Testing Directorate, Policy, and Compliance and Enforcement",
      'Since PowerBI is a Microsoft product, it has great interoperability with the suite of Microsoft products that PHAC currently uses (SharePoint, blob storage, SQL databases), and it is also approved for Protected B data. PowerBI has a built in ETL with dataflows, and DMIA leveraged that along with relationship and measure functions in PowerBI to build sophisticated dashboards that can be edited on the fly contingent on constantly changing business requirements.',
      "Examples of data that is being analyzed in PBI include but is not limited to DMIA's technical profile, COVID-19 at the borders, compliance and enforcement, wastewater surveillance, monkeypox, and COVID-19 cases."
    ],
    categories: ['Data Analysis', 'Data Visualization'],
    url: 'https://powerbi.microsoft.com/en-us/',
    images: [
      'products/powerbi/powerbi2.png',
      'products/powerbi/powerbi1.png',
      'projects/borders/border_measures_1.png'
    ],
    color: '#efb53e',
    comingSoon: false
  }
];
