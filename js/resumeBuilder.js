var bio = {
	"name" : "Randal Parsons",
	"role" : "Component Architect",
	"welcomeMessage" : "Hello",
	"contacts" : {
		"mobile" : "0425-349-109",
		"email" : "Randal.Parsons@gmail.com",
		"github" : "RandalP",
		"twitter" : "",
		"location" : "Sydney, Australia"
	},
	"welcomeMessage" : "Why would I welcome you to my resume?",
	"skills" :  [
		"CompSci", "Maths", "Finance"
	],
	"bioPic" : "images/fry.jpg",
	"display" : function() {
		$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));

		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

		//$("#topContacts").append(HTMLcontactGeneric).replace("%contact%", ??);
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		
		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		if (bio.skills.length > 0) {
    		$("#header").append(HTMLskillsStart);
    		for (var i = 0; i < bio.skills.length; ++i) {
      			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    		}
  		}
/*

var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";

var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";
*/
	}
};


var work = {
	"jobs" : [ 
		{
			"title": "Senior Development Manager/Architect",
			"employer" : "Openlink International",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates" : "2006-2014",
			"location" : "Sydney, Australia"
		}, 
		{
			"title": "Senior Development Manager/Architect",
			"employer" : "Openlink International",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates" : "2005-2006",
			"location" : "Uniondale, NY"
		},
		{
			"title": "Senior Development Manager/Architect",
			"employer" : "Openlink International",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates" : "2003-2005",
			"location" : "Sydney, Australia"
		} ,
		
		{
			"title": "Senior Development Manager/Architect",
			"employer" : "Openlink International",
			"description" : "Manage team in NY to develop business components in COM",
			"dates" : "2003",
			"location" : "Uniondale, NY"
		},
		{
			"title": "Vice President, Technology",
			"employer" : "Zurich Capital Markets Australia",
			"description" : "Manage JV with Openlink Financial in NY.",
			"dates" : "2001-2002",
			"location" : "Uniondale, NY"
		},
		{
			"title": "Associate Director, Quantitative Applications Division",
			"employer" : "Macquarie Bank",
			"description" : "Develop analytic components in COM.",
			"dates" : "1999-2000",
			"location" : "Sydney, Australia"
		}, 
		{
			"title": "Vice President, Derivatives Technology",
			"employer" : "Bankers Trust Australia",
			"description" : "Develop analytic components in COM.",
			"dates" : "1994-1999",
			"location" : "Sydney, Australia"
		}
	],
	"display" : function() {
	    for (j in work.jobs) {
	    	$("#workExperience").append(HTMLworkStart);
	      	var job = work.jobs[j];
	      
	     	var employer = HTMLworkEmployer.replace("%data%", job.employer);
	      	var title = HTMLworkTitle.replace("%data%", job.title);
	      	var dates = HTMLworkDates.replace("%data%", job.dates);
	      	var location = HTMLworkLocation.replace("%data%", job.location);
	      	var description = HTMLworkDescription.replace("%data%", job.description);
	     	$(".work-entry:last").append(employer + title + dates + location + description);
	 	}
	 }
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
	],
	"display" : function() {
		for (var p in projects.project) {
	    	$("#projects").append(HTMLprojectStart);
	      	var project = projects.project[p];
	      	var title = HTMLprojectTitle.replace("%data%", project.title);
	      	var dates = HTMLprojectDates.replace("%data%", project.dates);
	      	var description = HTMLprojectDescription.replace("%data%", project.description);
	      	$(".project-entry:last").append(title + dates + description);
	      	if (project.images.length > 0) {
	        	for (var image in project.images) {
	          		var image = HTMLprojectImage.replace("%data%", project.images[image]);
	          		$(".project-entry:last").append(image);
	        	}
	      	}
		}
	}
};

var education = {
	"schools": [
		{
			"name" : "University of Sydney",
			"location" : "Sydney",
			"degree" : "Bachelor of Science (Honors)",
			"dates" : "1986-1989",
			"majors"  : ["CompSci", "Pure Maths"],
			"url" : ""
		},
		{
			"name" : "University of Technology Sydney",
			"location" : "Sydney",
			"degree" : "Master of Business (Finance)",
			"dates" : "1998-2000",
			"majors"  : ["Quantitative Finance"],
			"url" : ""
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "December 2014",
			"url" : "http://www.udacity.com/course/ud804"
	 	}
	],
	"display" : function() {
    	for (var s in education.schools) {
      		$("#education").append(HTMLschoolStart);
            var school = education.schools[s];
		    var name = HTMLschoolName.replace("%data%", school.name);
		    var degree = HTMLschoolDegree.replace("%data%", school.degree);
		    var dates = HTMLschoolDates.replace("%data%", school.dates);
		    var location = HTMLschoolLocation.replace("%data%", school.location);
		    $(".education-entry:last").append(name + degree + dates + location);
		    if (school.majors.length > 0) {
		    	for (var m in school.majors) {
		        	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[m]));
		        }
		    }
	    }
	    if (education.onlineCourses.length > 0) {
      		$("#education").append(HTMLschoolStart);
	    	$(".education-entry:last").append(HTMLonlineClasses);
	      	for (var o in education.onlineCourses) {
	        	var course = education.onlineCourses[o];
		        var title = HTMLonlineTitle.replace("%data%", course.title);
		        var school = HTMLonlineSchool.replace("%data%", course.school);
		        var dates = HTMLonlineDates.replace("%data%", course.dates);
		        var url = HTMLonlineURL.replace("%data%", course.url);
		        $(".education-entry:last").append(title + school + dates + url);
		    }
		}
	}
};


