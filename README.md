# Data Analytics Portfolio

The Data Analytics Portfolio page is developed using HTML, CSS, and JavaScript and it is being hosted and deployed by GitHub using GitHub Pages.

# How to make updates

Here is information on how to update the main sections of the portfolio

## Color conventions

There are pre-defined color shades to be used on the page. They are defined at the end of the `css/style.css` file. If any other colors need to be defined, that is where they should go.

The current defined colors are:

- Pink (class `.pink-background`)
- Gray (class `.gray-background`)
- Brown (class `.brown-background`)
- Orange (class `.orange-background`)
- Yellow (class `.yellow-background`)
- Green (class `.green-background`)
- Blue (class `.blue-background`)
- Purple (class `.purple-background`)
- Red (class `.red-background`)
- Light gray (class `.light-gray-background`)

Colors are mainly used for tag-like items, especially when looking at the tool inventory table and the tool sections under each project page.

Categories, Teams, and Projects, are all automatically color-coded using a formatter function defined under `js/create_table.js`.

If a new Category, Team, or Project, is added to the table and it needs a defined color, you must add its color to their respective variable under `js/variables.js`.

> If there’s an item not defined OR it is misspelled (keeping in mind it is case-sensitive), its color will be defaulted to gray.

The currently defined Categories/Teams/Projects objects are defined on `js/variables.js` and their colors are below. 

## Categories

- `Mapping` = pink
- `Data Analysis` = green
- `Data Cleaning` = blue
- `Data Visualization` = yellow
- `Data Collection` = orange
- `Code Repository` = purple
- `Project Management` = orange
- `Data Transfer` = brown
- `Containerization` = green
- `Reproducibility` = red
- `Diagram Creation` = purple
- `File Storage` = green

### Teams

- `NML Geomatics` = pink
- `CIRID` = yellow
- `Data Hub` = orange
- `Compliance Enforcement` = blue
- `CCDIC` = green

### Projects

- `CIRID Epitrend Reports` = orange
- `Border Measures` = green
- `Dashboard for Immunization Related Diseases (DIRD)` = purple
- `Wastewater Project` = blue
- `National Surveillance Project` = red
- `DISCOVER` = yellow

For the columns "Protected B Data" and "Self-hosted Version", the only possible options are "Yes" or "No". They are also color-coded: "Yes" being green, and "No" being red.

## Adding more projects to the portfolio

The main section for this page is the project portfolio, which includes a collection of projects worked on by the data analytics team.

When a new project needs to be added to the portfolio, there are 3 steps to take.

### 1. Creating project page

Each project in the portfolio has its own page. Each of them are developed taking the `project_template.html` file as a template.

So, duplicate the file, rename it with something to do with your project, and make the following changes:

1. Change the project title on 2 places — the `<title>` tag under `<head>` and the `<h1>` tag under `<header>`
2. Change the background information by changing the `<p>` tags under the background title and add more if necessary
3. Add a statement for the Problem, Goal, and Solution to each of their respective `<p>` tags under each column
4. Change image(s) sources to a visual related to the project and add more if necessary
5. Change the `<h3>` tags under Success Metrics and add more if necessary. Here, each of them are a `.tag` class as well as a color class (see [above](#color-conventions)), there's no standard color pattern here, so just make it look good.
6. Change the `<h3>` tags under Tools Used and add more if necessary. Here, each of them are a `.tag` class as well as a color class (see [above](#color-conventions)), there's no standard color pattern here, so just make it look good.

### 2. Getting stock project image

Find a stock image to serve as a project card background. Websites like [Pexels](https://www.pexels.com) and [Unsplash](https://unsplash.com) are a great way to look for one. Make sure the image you pick is free and can be used on a public website.

Then, import that image to the `images` folder under the project repository.

### 3. Creating project card

Last but not least, we need to create a project card in order to connect our home page to the project page created in [step 1](#1-creating-project-page).

Under the `index.html` file, create a new link within the project portfolio section (under the `.project-card-list` div) with the following structure:

```html
<a class="project-card" href="LINK_TO_PROJECT_PAGE">
	<img src="LINK_TO_STOCK_IMAGE" class="project-card-image">
	<div class="project-card-information">
		<span class="project-card-title">PROJECT TITLE</span>
		<p class="project-card-description">SHORT PROJECT DESCRIPTION</p>
	</div>
</a>
```

Done, now there's a new card under the project portfolio page and, if all classes are correctly set, the styling should be taken care of.

## Adding more tools to the tool inventory table

The tool inventory table is generated using the Tabulator library on JavaScript.

The `tools` variable defined on `js/variables.js` is a list of dictionaries — one for each of the tools shown on the table.

To add more items to the tool inventory table, just add another tool dictionary to the `tools` list following the specified project dictionary format:

```jsx
{
	tool:"", // String - Name of the tool
	categories:[], // List of Strings - Categories the tool is used for (see [above]())
	cost:"", // String - Cost for using the tool
	protected_b_data:"", // String - "Yes" or "No", specifying whether the tool is approved to be used with Protected B Data
	link:"", // String - Link for the tool's website
	self_hosted_version:"", // String - "Yes" or "No", specifying whether the tool has a self-hosted version within the Agency
	teams_using_it:[], // List of Strings - Teams that the tool has been used by (see [above]())
	projects_used_on:[] // List of Strings - Projects that the tool has been used on (see [above]())
}
```

If another Category, Team, or Project needed to be added when adding the new tool, please make sure you add it to their respective variable on `js/variables.js` and color code it accordingly.

## Adding more tools to other useful tools

The last section of the page is "Other Useful Tools" which includes a list of non-main tools used by the team.

They are defined under the `index.html` page.

It consists of a `.column-list` div with 3 `.column`'s inside. Each of the columns contains level 3 headings with the specified tools.

To add a new tool to the list, just add another level 3 heading (e.g. `<h3>TOOL NAME</h3>`) to one of the columns (the length of each column is hard coded, so make sure the tables have similar-sized lengths so it looks good).