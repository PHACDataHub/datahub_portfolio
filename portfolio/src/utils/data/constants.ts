import { InventoryTool, TagType } from "../types";

export const otherUsefulToolsList = [
  "RStudio",
  "SourceTree",
  "PgAdmin",
  "VS Code",
  "Git",
  "7-Zip",
  "Anaconda",
  "Notepad++",
  "Rocket Chat",
  "Firefox",
];

export const toolInventoryList: InventoryTool[] = [
  {
    name: "ArcGIS",
    categories: ["Mapping"],
    cost: "Per user fee",
    protected_b_data: true,
    url: "https://www.arcgis.com/index.html",
    self_hosted_version: false,
    teams: ["NML Geomatics"],
    projects: [],
    image: "https://www.arcgis.com/graphics/arcgis-online-icon.png",
  },
  {
    name: "OneDrive",
    categories: ["File Storage", "File Sharing", "Live Collaboration"],
    cost: "Free",
    protected_b_data: true,
    url: "https://onedrive.live.com/about/en-us/signin/",
    self_hosted_version: true,
    teams: ["Data Hub"],
    projects: ["Border Measures"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019–present%29.svg",
  },
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
    teams: ["Data Hub", "CIRID"],
    projects: ["CIRID Epitrend Reports"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/512px-R_logo.svg.png",
  },
  {
    name: "LimeSurvey",
    categories: ["Data Collection"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.limesurvey.org/",
    self_hosted_version: true,
    teams: ["Data Hub", "Compliance Enforcement"],
    projects: ["Border Measures"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Limesurvey_logo.png",
  },
  {
    name: "Power BI",
    categories: ["Data Visualization"],
    cost: "Per user/month fee",
    protected_b_data: true,
    url: "https://powerbi.microsoft.com/en-us/",
    self_hosted_version: true,
    teams: ["Data Hub", "Compliance Enforcement"],
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
    teams: ["Data Hub"],
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
    teams: ["Data Hub"],
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
    teams: ["Data Hub", "CIRID"],
    projects: [
      "Border Measures",
      "Wastewater Project",
      "National Surveillance Project",
    ],
    image:
      "https://images.ctfassets.net/3lmzp7rq9ytt/2GfvIyMz5Dd99vje52s3Gg/533b0b337103dfe3783733ab168584da/azure-storage-blob--v1.png",
  },
  {
    name: "LiquidFiles",
    categories: ["Data Transfer"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.liquidfiles.com/",
    self_hosted_version: true,
    teams: ["Data Hub", "Compliance Enforcement"],
    projects: ["Border Measures"],
    image:
      "https://man.liquidfiles.com/assets/images/logo_144x144-362aae5506940de69ed13cf4f518a9d20ca5271f4e82934de4e31cb04f03a37a.png",
  },
  {
    name: "GitHub",
    categories: ["Project Management", "Code Repository"],
    cost: "Free",
    protected_b_data: false,
    url: "https://github.com/",
    self_hosted_version: false,
    teams: ["Data Hub", "CIRID"],
    projects: ["CIRID Epitrend Reports", "Wastewater Project"],
    image:
      "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Docker",
    categories: ["Containerization", "Reproducibility"],
    cost: "Free",
    protected_b_data: true,
    url: "https://www.docker.com/",
    self_hosted_version: true,
    teams: ["Data Hub"],
    projects: ["National Surveillance Project"],
    image:
      "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
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
    name: "SurveyMonkey",
    categories: ["Data Collection"],
    cost: "Per user/month fee",
    protected_b_data: false,
    url: "https://www.surveymonkey.com/",
    self_hosted_version: false,
    teams: [],
    projects: [],
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//mp-brandassets-goldie-768x334.png",
  },
  {
    name: "VoxCo",
    categories: ["Data Collection"],
    cost: "Per user fee",
    protected_b_data: true,
    url: "https://www.voxco.com/",
    self_hosted_version: false,
    teams: ["CCDIC"],
    projects: [],
    image:
      "https://www.voxco.com/wp-content/uploads/2020/04/cropped-Capture-removebg-preview.png",
  },
  {
    name: "Metabase",
    categories: ["Data Analysis", "Data Visualization"],
    cost: "Free if self-hosted and paid for metabase cloud/enterprise editions",
    protected_b_data: true,
    url: "https://www.metabase.com/",
    self_hosted_version: true,
    teams: ["CIRID"],
    projects: ["DISCOVER"],
    image:
      "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/233858/logo.png",
  },
  {
    name: "Databricks",
    categories: ["Data Analysis", "Data Cleaning"],
    cost: "Per user fee",
    protected_b_data: true,
    url: "https://databricks.com/",
    self_hosted_version: true,
    teams: ["Data Hub"],
    projects: [
      "Border Measures",
      "Dashboard for Immunization Related Diseases (DIRD)",
    ],
    image:
      "https://www.brighttalk.com/wp-content/uploads/2019/07/Databricks-logo-1.png",
  },
  {
    name: "Draw.io",
    categories: ["Diagram Creation"],
    cost: "Free",
    protected_b_data: false,
    url: "https://app.diagrams.net/",
    self_hosted_version: false,
    teams: ["Data Hub"],
    projects: ["National Surveillance Project"],
    image:
      "https://drawio-app.com/wp-content/uploads/2021/05/drawio_logo_RGB_symbol_large.png",
  },
];

export const categories: TagType[] = [
  {
    name: "Mapping",
    color: "pink.200",
  },
  {
    name: "Data Analysis",
    color: "green.200",
  },
  {
    name: "Data Cleaning",
    color: "blue.200",
  },
  {
    name: "Data Visualization",
    color: "yellow.200",
  },
  {
    name: "Data Collection",
    color: "orange.200",
  },
  {
    name: "Code Repository",
    color: "purple.200",
  },
  {
    name: "Project Management",
    color: "orange.200",
  },
  {
    name: "Data Transfer",
    color: "orange.400",
  },
  {
    name: "Containerization",
    color: "green.200",
  },
  {
    name: "Reproducibility",
    color: "red.200",
  },
  {
    name: "Diagram Creation",
    color: "purple.200",
  },
  {
    name: "File Storage",
    color: "green.200",
  },
  {
    name: "File Sharing",
    color: "red.200",
  },
  {
    name: "Live Collaboration",
    color: "blue.200",
  },
];

export const teams: TagType[] = [
  {
    name: "Data Hub",
    color: "orange.200",
  },
  {
    name: "Compliance Enforcement",
    color: "blue.200",
  },
  {
    name: "CIRID",
    color: "yellow.200",
  },
  {
    name: "CCDIC",
    color: "green.200",
  },
  {
    name: "NML Geomatics",
    color: "pink.200",
  },
];

export const projects: TagType[] = [
  {
    name: "CIRID Epitrend Reports",
    color: "orange.200",
  },
  {
    name: "Border Measures",
    color: "green.200",
  },
  {
    name: "Dashboard for Immunization Related Diseases (DIRD)",
    color: "purple.200",
  },
  {
    name: "Wastewater Project",
    color: "blue.200",
  },
  {
    name: "National Surveillance Project",
    color: "red.200",
  },
  {
    name: "DISCOVER",
    color: "yellow.200",
  }
]