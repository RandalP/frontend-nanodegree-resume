

var work = {
	"jobs" : [
		{
			"title": "Senior Development Manager/Architect",
			"employer" : "Openlink International",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates" : "2003-2014",
			"city" : "Sydney"
		},
		{
			"title": "Vice President, Development",
			"employer" : "Zurich Capital Markets Australia",
			"description" : "Manage JV with Openlink Financial in NY.",
			"dates" : "2001-2002",
			"city" : "Sydney"
		},
		{
			"title": "Associate Director, Quantitative Applications Division",
			"employer" : "Macquarie Bank",
			"description" : "Develop analytic components in COM.",
			"dates" : "1999-2000",
			"city" : "Sydney"
		},
		{
			"title": "Vice President, Derivatives Technology",
			"employer" : "Bankers Trust Australia",
			"description" : "Develop analytic components in COM.",
			"dates" : "1994-1999",
			"city" : "Sydney"
		}
	]
};
var projects = {
	"project" : [
		{
			"title" : "Arcadia",
			"dates" : "1994-1999",
			"description" : "COM business objects",
			"images" : [ "http://placehold.it/200x200" ]
		},
		{
			"title" : "Zeus",
			"dates" : "2001",
			"description" : "COM analytics and table",
			"images" : [ "http://placehold.it/200x200", "http://placehold.it/400x500" ]
		},
		{
			"title" : "Pandora/OpenComponents",
			"dates" : "2003-2014",
			"description" : "Java and .NET business objects",
			"images" : [ "http://placehold.it/200x200" ]
		}
	]
};

var skills = [ "CompSci", "Maths", "Finance"];
var bio = {
	"name" : "Randal Parsons",
	"role" : "Component Architect",
	"welcomeMessage" : "Hello",
	"skills" : skills,
	"contacts" : {
		"mobile" : "0425-349-109",
		"email" : "Randal.Parsons@gmail.com",
		"github" : "RandalP",
		"twitter" : "",
		"location" : "Sydney"
	}
};
var education = {
	"schools": [
		{
			"name" : "University of Sydney",
			"city" : "Sydney",
			"degree" : "Bachelor of Science (Honors)",
			"majors"  : ["CompSci", "Pure Maths"],
			"url" : ""
		},
		{
			"name" : "University of Technology Sydney",
			"city" : "Sydney",
			"degree" : "Master of Business (Finance)",
			"majors"  : ["Quantitative Finance"],
			"url" : ""
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "December 2014",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
	 	}
	]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#main").append(bio.age);
//$("#main").append(bio.skills);
//$("#main").append(work.position);

//$("#education-entry").append(HTMLschoolName.replace("%data%", education.name));
//$("#education").append(HTMLschoolDegree.replace("%data%", education.degree));
//$("#education").append(HTMLschoolDates.replace("%data%", education.years));
//$("#education").append(HTMLschoolLocation.replace("%data%", education.city));

