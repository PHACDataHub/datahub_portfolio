// To make the table have tag-like values, such as a list of categories, teams, and projects
// there was a need for a custom formatter for the required columns to add the CSS class to it
// If any other categories, teams, and/or projects need to be added, just add them to their
// respective function's switch statement

var category_tagFormatter = function(cell, formatterParams, onRendered){
    var values = cell.getValue();
    var tags = "";

    if(values){
        values.forEach(function(value){
            background_color = ""
            switch(String(value)){
                case "Mapping":
                    background_color = "pink";
                    break;
                case "Data Analysis":
                    background_color = "green";
                    break;
                case "Data Cleaning":
                    background_color = "blue";
                    break;
                case "Data Visualization":
                    background_color = "yellow";
                    break;
                case "Data Collection":
                    background_color = "orange";
                    break;
                case "Code Repository":
                    background_color = "purple";
                    break;
                case "Project Management":
                    background_color = "orange";
                    break;
                case "Data Transfer":
                    background_color = "brown";
                    break;
                case "Containerization":
                    background_color = "green";
                    break;
                case "Reproducibility":
                    background_color = "red"
                    break;
                default:
                    background_color = "gray"
                    break;
            }
            tags += "<span class='tag "+ background_color + "-background'>" + value + "</span><br>";
        })
    }
    return tags;
}

var team_tagFormatter = function(cell, formatterParams, onRendered){
    var values = cell.getValue();
    var tags = "";

    if(values){
        values.forEach(function(value){
            background_color = ""
            switch(String(value)){
                case "NML Geomatics":
                    background_color = "pink";
                    break;
                case "CIRID":
                    background_color = "yellow";
                    break;
                case "Data Hub":
                    background_color = "orange";
                    break;
                case "Compliance Enforcement":
                    background_color = "blue";
                    break;
                case "CCDIC":
                    background_color = "green";
                    break;
                default:
                    background_color = "gray"
                    break;
            }
            tags += "<span class='tag "+ background_color + "-background'>" + value + "</span><br>";
        })
    }
    return tags;
}

var project_tagFormatter = function(cell, formatterParams, onRendered){
    var values = cell.getValue();
    var tags = "";

    if(values){
        values.forEach(function(value){
            background_color = ""
            switch(String(value)){
                case "CIRID Epitrend Reports":
                    background_color = "orange";
                    break;
                case "Border Measures":
                    background_color = "green";
                    break;
                case "Dashboard for Immunization Related Diseases (DIRD)":
                    background_color = "purple";
                    break;
                case "Wastewater Project":
                    background_color = "blue";
                    break;
                case "National Surveillance Project":
                    background_color = "red";
                    break;
                case "DISCOVER":
                    background_color = "yellow";
                    break;
                default:
                    background_color = "gray"
                    break;
            }
            tags += "<span class='tag "+ background_color + "-background'>" + value + "</span><br>";
        })
    }
    return tags;
}

var yes_no_tagFormatter = function(cell, formatterParams, onRendered){
    var value = cell.getValue();
    if(value) {
        background_color = ""
        switch(String(value)){
            case "Yes":
                background_color = "green";
                break;
            case "No":
                background_color = "red";
                break;
            default:
                background_color = "gray";
                break;
        }
    }
    return "<span class='tag "+ background_color + "-background'>" + value + "</span>";
}

// The template for adding another tool to the inventory table is:
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

// Just fill in the data above and add it to the list below

var tableData = [
        {tool:"ArcGIS",
        categories:["Mapping"],
        cost: "Per user fee",
        protected_b_data:"Yes",
        link:"https://www.arcgis.com/index.html",
        self_hosted_version:"No",
        teams_using_it:["NML Geomatics"],
        projects_used_on:[]
    },
        {tool:"QGIS",
        categories:["Mapping"],
        cost: "Free",
        protected_b_data:"Yes",
        link:"https://www.qgis.org/en/site/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
        {tool:"R",
        categories:["Data Analysis", "Data Cleaning", "Data Visualization", "Mapping"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.r-project.org/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub", "CIRID"],
        projects_used_on:["CIRID Epitrend Reports"]
    },
        {tool:"LimeSurvey",
        categories:["Data Collection"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.limesurvey.org/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub", "Compliance Enforcement"],
        projects_used_on:["Border Measures"]
    },
        {tool:"Power BI",
        categories:["Data Visualization"],
        cost:"Per user/month fee",
        protected_b_data:"Yes",
        link:"https://powerbi.microsoft.com/en-us/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub","Compliance Enforcement"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
        {tool:"Python",
        categories:["Data Analysis", "Data Cleaning", "Data Visualization", "Mapping"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.python.org/",
        self_hosted_version:"",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)", "Wastewater Project"]
    },
        {tool:"Azure DevOps",
        categories:["Project Management", "Code Repository"],
        cost:"Depends on usage case",
        protected_b_data:"Yes",
        link:"https://azure.microsoft.com/en-ca/services/devops/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "National Surveillance Project", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
        {tool:"LiquidFiles",
        categories:["Data Transfer"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.liquidfiles.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub", "Compliance Enforcement"],
        projects_used_on:["Border Measures"]
    },
        {tool:"GitHub",
        categories:["Project Management", "Code Repository"],
        cost:"Free",
        protected_b_data:"No",
        link:"https://github.com/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub", "CIRID"],
        projects_used_on:["CIRID Epitrend Reports", "Wasterwater Project"]
    },
        {tool:"Docker",
        categories:["Containerization", "Reproducibility"],
        cost:"Free",
        protected_b_data:"Yes",
        link:"https://www.docker.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["National Surveillance Project"]
    },
        {tool:"Tableau",
        categories:["Data Visualization"],
        cost:"Per user/month fee",
        protected_b_data:"Yes",
        link:"https://www.tableau.com/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
        {tool:"SurveyMonkey",
        categories:["Data Collection"],
        cost:"Per user/month fee",
        protected_b_data:"No",
        link:"https://www.surveymonkey.com/",
        self_hosted_version:"No",
        teams_using_it:[],
        projects_used_on:[]
    },
        {tool:"VoxCo",
        categories:["Data Collection"],
        cost:"Per user fee",
        protected_b_data:"Yes",
        link:"https://www.voxco.com/",
        self_hosted_version:"No",
        teams_using_it:["CCDIC"],
        projects_used_on:[]
    },
        {tool:"Metabase",
        categories:["Data Analysis", "Data Visualization"],
        cost:"Free if self-hosted and paid for metabase cloud/enterprise editions",
        protected_b_data:"Yes",
        link:"https://www.metabase.com/",
        self_hosted_version:"Yes",
        teams_using_it:["CIRID"],
        projects_used_on:["DISCOVER"]
    },
        {tool:"Databricks",
        categories:["Data Analysis", "Data Cleaning"],
        cost:"Per user fee",
        protected_b_data:"Yes",
        link:"https://databricks.com/",
        self_hosted_version:"Yes",
        teams_using_it:["Data Hub"],
        projects_used_on:["Border Measures", "Dashboard for Immunization Related Diseases (DIRD)"]
    },
        {tool:"Draw.io",
        categories:["Diagram Creation"],
        cost:"Free",
        protected_b_data:"No",
        link:"https://app.diagrams.net/",
        self_hosted_version:"No",
        teams_using_it:["Data Hub"],
        projects_used_on:["National Surveillance Project"]
    }
]

// Creating the table and setting column names

var table = new Tabulator('#tool-inventory-table',{
    data: tableData,
    columns:[
        {title:"Tool", field:"tool"},
        {title:"Categories", field:"categories", formatter: category_tagFormatter, headerSort:false},
        {title:"Cost", field:"cost", formatter: "textarea", width: "200"},
        {title:"Protected B Data", field:"protected_b_data", formatter: yes_no_tagFormatter, align:"center"},
        {title:"Link", field:"link"},
        {title:"Self-hosted Version", field:"self_hosted_version", formatter: yes_no_tagFormatter, align:"center"},
        {title:"Teams using it", field:"teams_using_it", formatter: team_tagFormatter, headerSort:false},
        {title:"Projects software is used on", field:"projects_used_on", formatter: project_tagFormatter, headerSort:false}
    ]
})