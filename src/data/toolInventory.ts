import { InventoryTool } from '../utils/types';

// Format for adding another Inventory Tool:
/**
 *  {
 *      name: 'Tool Name',
 *      categories: ['Category 1', 'Category 2', 'Category 3'],
 *      cost: 'Tool Cost',
 *      protected_b_data: [true|false],
 *      url: 'Tool Link',
 *      self_hosted_version: [true|false],
 *      teams: ['Team 1', 'Team 2', 'Team 3'],
 *      projects: ['Project 1', 'Project 2', 'Project 3'],
 *      image: 'Tool Image (either a link or a local image)',
 *  }
 *
 *  If using local image, add image to public/images/tools/ and use the following path:
 *  process.env.PUBLIC_URL + '/images/tools/IMAGE_NAME'
 */

export const toolInventoryList: InventoryTool[] = [
  {
    name: 'QGIS',
    categories: ['Mapping'],
    cost: 'Free',
    protected_b_data: true,
    url: 'https://www.qgis.org/en/site/',
    self_hosted_version: false,
    teams: [],
    projects: [],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg'
  },
  {
    name: 'R',
    categories: [
      'Data Analysis',
      'Data Cleaning',
      'Data Visualization',
      'Mapping'
    ],
    cost: 'Free',
    protected_b_data: true,
    url: 'https://www.r-project.org/',
    self_hosted_version: false,
    teams: ['Data Management, Innovation and Analytics (DMIA)', 'CIRID'],
    projects: ['CIRID Epitrend Reports'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/512px-R_logo.svg.png'
  },
  {
    name: 'Python',
    categories: [
      'Data Analysis',
      'Data Cleaning',
      'Data Visualization',
      'Mapping'
    ],
    cost: 'Free',
    protected_b_data: true,
    url: 'https://www.python.org/',
    self_hosted_version: false,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: [
      'Border Measures',
      'Dashboard for Immunization Related Diseases (DIRD)',
      'Wastewater Project'
    ],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
  },
  {
    name: 'Azure DevOps',
    categories: ['Project Management', 'Code Repository'],
    cost: 'Depends on usage case',
    protected_b_data: true,
    url: 'https://azure.microsoft.com/en-ca/services/devops/',
    self_hosted_version: true,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: [
      'Border Measures',
      'National Surveillance Project',
      'Dashboard for Immunization Related Diseases (DIRD)'
    ],
    image:
      'https://149765861.v2.pressablecdn.com/wp-content/uploads/2020/01/devops.png'
  },
  {
    name: 'Azure Blob Storage',
    categories: ['File Storage'],
    cost: 'Depends on usage case',
    protected_b_data: true,
    url: 'https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction',
    self_hosted_version: true,
    teams: ['Data Management, Innovation and Analytics (DMIA)', 'CIRID'],
    projects: [
      'Border Measures',
      'Wastewater Project',
      'National Surveillance Project'
    ],
    image:
      'https://images.ctfassets.net/3lmzp7rq9ytt/2GfvIyMz5Dd99vje52s3Gg/533b0b337103dfe3783733ab168584da/azure-storage-blob--v1.png'
  },
  {
    name: 'GitHub',
    categories: ['Project Management', 'Code Repository'],
    cost: 'Free',
    protected_b_data: false,
    url: 'https://github.com/',
    self_hosted_version: false,
    teams: ['Data Management, Innovation and Analytics (DMIA)', 'CIRID'],
    projects: ['CIRID Epitrend Reports', 'Wastewater Project'],
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
  {
    name: 'Draw.io',
    categories: ['Diagram Creation'],
    cost: 'Free',
    protected_b_data: false,
    url: 'https://app.diagrams.net/',
    self_hosted_version: false,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: ['National Surveillance Project'],
    image:
      'https://drawio-app.com/wp-content/uploads/2021/05/drawio_logo_RGB_symbol_large.png'
  },
  {
    name: 'SQL',
    categories: ['Data Cleaning', 'Data Storage', 'Data Retrieval'],
    cost: 'Free',
    protected_b_data: true,
    url: 'https://www.sql.org/',
    self_hosted_version: true,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: [
      'Dashboard for Immunization Related Diseases (DIRD)',
      'Border Measures'
    ],
    image: process.env.PUBLIC_URL + '/images/tools/sql_database.png'
  },
  {
    name: 'Django',
    categories: ['Web Development', 'Data Collection'],
    cost: 'Free',
    protected_b_data: true,
    url: 'https://www.djangoproject.com/',
    self_hosted_version: true,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: [],
    image: process.env.PUBLIC_URL + '/images/tools/django_logo.png'
  },
  {
    name: 'D3',
    categories: ['Data Visualization', 'Data Analysis', 'Dashboard Creation'],
    cost: 'Free',
    protected_b_data: false,
    url: 'https://d3js.org/',
    self_hosted_version: true,
    teams: ['Infobase'],
    projects: [],
    image: process.env.PUBLIC_URL + '/images/tools/d3_logo.svg'
  },
  {
    name: 'Azure Data Factory',
    categories: [
      'Data Integration',
      'Data Transformation',
      'Data Transfer',
      'Data Cleaning'
    ],
    cost: 'Depends on usage case',
    protected_b_data: true,
    url: 'https://azure.microsoft.com/en-ca/services/data-factory/',
    self_hosted_version: true,
    teams: ['Data Management, Innovation and Analytics (DMIA)'],
    projects: ['Border Measures'],
    image: process.env.PUBLIC_URL + '/images/tools/adf_logo.png'
  }
];
