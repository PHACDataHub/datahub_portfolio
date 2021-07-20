/*

This file declares all variables needed for generating the tools table
This way, it's easier to have one source of truth and it is easy to modify later on

The format for adding more items to categories/teams/projects is:
"NAME":"COLOR"
e.g. "Data Visualization":"yellow"

The currently defined colors are:
- pink
- gray
- brown
- orange
- yellow
- green
- blue
- purple
- red
- light-gray

More colors can be added to the bottom of the style.css sheet

*/

var categories = {
    "Mapping":"pink",
    "Data Analysis":"green",
    "Data Cleaning":"blue",
    "Data Visualization":"yellow",
    "Data Collection":"orange",
    "Code Repository":"purple",
    "Project Management":"orange",
    "Data Transfer":"brown",
    "Containerization":"green",
    "Reproducibility":"red",
    "Diagram Creation":"purple",
    "File Storage":"green"
};

var teams = {
    "NML Geomatics":"pink",
    "CIRID":"yellow",
    "Data Hub":"orange",
    "Compliance Enforcement":"blue",
    "CCDIC":"green"
};


var projects = {
    "CIRID Epitrend Reports":"orange",
    "Border Measures":"green",
    "Dashboard for Immunization Related Diseases (DIRD)":"purple",
    "Wastewater Project":"blue",
    "National Surveillance Project":"red",
    "DISCOVER":"yellow"
};

// Creates a unified dictionary so that colors can be easily accessed
var allItems = Object.assign({}, categories, teams, projects);

// The template for adding another tool to the list bellow is:
//
// {tool:"",
//  categories:[],
//  cost:"",
//  protected_b_data:"",
//  link:"",
//  self_hosted_version:"",
//  teams_using_it:[],
//  projects_used_on:[]
// }

var tools = [
    {   tool:"ArcGIS",
        categories:["Mapping"],
        cost: "Per user fee",
        protected_b_data:"Yes",
        link:"https://www.arcgis.com/index.html",
        self_hosted_version:"No",
        teams_using_it:["NML Geomatics"],
        projects_used_on:[]
    },
    {   tool:"OneDrive",
        categories:["File Storage", "File Sharing", "Live Collaboration"],
        cost: "Free",
        protected_b_data:"Yes",
        link:"https://onedrive.live.com/about/en-us/signin/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures"]
    },    
    {   tool:"QGIS",
        categories:["Mapping"],
        cost: "Free",
        protected_b_data:"Yes",
        link:"https://www.qgis.org/en/site/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
    {   tool:"R",
        categories:["Data Analysis", "Data Cleaning", "Data Visualization", "Mapping"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.r-project.org/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub", "CIRID"],
        projects_used_on:["CIRID Epitrend Reports"]
    },
    {   tool:"LimeSurvey",
        categories:["Data Collection"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.limesurvey.org/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub", "Compliance Enforcement"],
        projects_used_on:["Border Measures"]
    },
    {   tool:"Power BI",
        categories:["Data Visualization"],
        cost:"Per user/month fee",
        protected_b_data:"Yes",
        link:"https://powerbi.microsoft.com/en-us/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub","Compliance Enforcement"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
    {   tool:"Python",
        categories:["Data Analysis", "Data Cleaning", "Data Visualization", "Mapping"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.python.org/",
        self_hosted_version:"",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)", "Wastewater Project"]
    },
    {   tool:"Azure DevOps",
        categories:["Project Management", "Code Repository"],
        cost:"Depends on usage case",
        protected_b_data:"Yes",
        link:"https://azure.microsoft.com/en-ca/services/devops/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "National Surveillance Project", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
    {   tool:"Azure Blob Storage",
        categories:["File Storage"],
        cost:"Depends on usage case",
        protected_b_data:"Yes",
        link:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub", "CIRID"],
        projects_used_on:["Border Measures", "Wastewater Project", "National Surveillance Project"]
    },
    {   tool:"LiquidFiles",
        categories:["Data Transfer"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.liquidfiles.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub", "Compliance Enforcement"],
        projects_used_on:["Border Measures"]
    },
    {   tool:"GitHub",
        categories:["Project Management", "Code Repository"],
        cost:"Free",
        protected_b_data:"No",
        link:"https://github.com/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub", "CIRID"],
        projects_used_on:["CIRID Epitrend Reports", "Wastewater Project"]
    },
    {   tool:"Docker",
        categories:["Containerization", "Reproducibility"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.docker.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["National Surveillance Project"]
    },
    {   tool:"Tableau",
        categories:["Data Visualization"],
        cost:"Per user/month fee",
        protected_b_data:"Yes",
        link:"https://www.tableau.com/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
    {   tool:"SurveyMonkey",
        categories:["Data Collection"],
        cost:"Per user/month fee",
        protected_b_data:"No",
        link:"https://www.surveymonkey.com/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
    {   tool:"VoxCo",
        categories:["Data Collection"],
        cost:"Per user fee",
        protected_b_data:"Yes",
        link:"https://www.voxco.com/",
        self_hosted_version:"No",
        teams_using_it:["CCDIC"],
        projects_used_on:[]
    },
    {   tool:"Metabase",
        categories:["Data Analysis", "Data Visualization"],
        cost:"Free if self-hosted and paid for metabase cloud/enterprise editions",
        protected_b_data:"Yes",
        link:"https://www.metabase.com/",
        self_hosted_version:"Yes",
        teams_using_it:["CIRID"],
        projects_used_on:["DISCOVER"]
    },
    {   tool:"Databricks",
        categories:["Data Analysis", "Data Cleaning"],
        cost:"Per user fee",
        protected_b_data:"Yes",
        link:"https://databricks.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
    {   tool:"Draw.io",
        categories:["Diagram Creation"],
        cost:"Free",
        protected_b_data:"No",
        link:"https://app.diagrams.net/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub"],
        projects_used_on:["National Surveillance Project"]
    }
];
