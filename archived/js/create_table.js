// To make the table have tag-like values, such as a list of categories, teams, and projects
// there was a need for a custom formatter for the required columns to add the CSS class to it

// If any other categories, teams, and/or projects need to be added, just check the repo's documentation on README.md

var color_tagFormatter = function(cell, formatterParams, onRendered){
    /*
        Arguments -> cell object from the tabulator table and formatterParams, onRendered -- not needed
        Returns -> HTML code like string with each value surrounded by a .tag span with their respective colors
    */
    var values = cell.getValue();
    var tags = "";

    if (values){
        values.forEach(function(value){
            if (value in allItems) {
                background_color = allItems[value];
            } else {
                background_color = "gray"; // if item was not defined under variables.js, its color defaults to gray
            }
            tags += "<span class='tag "+ background_color + "-background'>"+ value +"</span><br>";
        })     
    }
    return tags
}

/* Creating tag-like style for "yes" and "no" tags */
var yes_no_tagFormatter = function(cell, formatterParams, onRendered){
    var value = cell.getValue();
    if(value) {
        background_color = "";
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

// Creating custom filter function for filtering by tags for tools
function filterTag(filterParams, data){
    // filterParams - params object passed to the filter - array of strings of selected filters
    // data - data for the row being filtered - array of strings of tool's categories

    var filteringFunction = function (value) {
        return data.includes(value);
    };

    return filterParams.every(filteringFunction); // returns boolean - true if it passes the filter
}

// Creating the table and setting column names

var table = new Tabulator('#tool-inventory-table',{
    data: tools,
    columns:[
        {   title:"Tool",
            field:"tool"
        },
        {   title:"Categories",
            field:"categories",
            formatter: color_tagFormatter,
            headerSort:false,
            headerFilter:'select',
            headerFilterFunc:filterTag,
            headerFilterParams:{
                values:Object.keys(categories), // categories is loaded and defined from 'variables.js' file
                sortValuesList:'asc',
                multiselect:true
            }
        },
        {   title:"Cost",
            field:"cost",
            formatter: "textarea",
            width: "200"
        },
        {   title:"Protected B Data",
            field:"protected_b_data",
            formatter: yes_no_tagFormatter,
            hozAlign:"center"
        },
        {   title:"Link",
            field:"link"
        },
        {   title:"Self-hosted Version",
            field:"self_hosted_version",
            formatter: yes_no_tagFormatter,
            hozAlign:"center"
        },
        {   title:"Teams using it",
            field:"teams_using_it",
            formatter: color_tagFormatter,
            headerSort:false,
            headerFilter:'select',
            headerFilterFunc:filterTag,
            headerFilterParams:{
                values:Object.keys(teams), // teams is loaded and defined from 'variables.js' file
                sortValuesList:'asc',
                multiselect:true
            }
        },
        {   title:"Projects software is used on",
            field:"projects_used_on",
            formatter: color_tagFormatter,
            headerSort:false,
            headerFilter:'select',
            headerFilterFunc:filterTag,
            headerFilterParams:{
                values:Object.keys(projects), // projects is loaded and defined from 'variables.js' file
                sortValuesList:'asc',
                multiselect:true
            }
        }
    ]
})