var bio = {
	"name" : "Randal Parsons",
	"role" : "Component Architect",
	"welcomeMessage" : "Hello",
	"contacts" : {
		"mobile" : "+61-425-349-109",
		"email" : "Randal.Parsons@gmail.com",
		"github" : "RandalP",
		"twitter" : "highgate76",
		"location" : "Sydney, Australia"
	},
	"skills" :  [
		"CompSci", "Maths", "Finance"
	],
	"bioPic" : "images/fry.jpg",
	"display" : function() {
		$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));

		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		
		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		if (bio.skills.length > 0) {
    		$("#header").append(HTMLskillsStart);
    		for (var i = 0; i < bio.skills.length; ++i) {
      			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    		}
  		}
	}
};


var work = {
	"jobs" : [ 
		{
			"employer" : "Openlink International",
			"title": "Senior Development Manager/Architect",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates worked" : "2006-2014",
			"location" : "Sydney, Australia"
		}, 
		{
			"employer" : "Openlink International",
			"title": "Senior Development Manager/Architect",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates worked" : "2005-2006",
			"location" : "Uniondale, NY, USA"
		},
		{
			"employer" : "Openlink International",
			"title": "Senior Development Manager/Architect",
			"description" : "Manage team in NY & Sydney to develop business components in Java and .NET",
			"dates worked" : "2003-2005",
			"location" : "Sydney, Australia"
		} ,
		
		{
			"employer" : "Openlink International",
			"title": "Senior Development Manager/Architect",
			"description" : "Manage team in NY to develop business components in COM",
			"dates worked" : "2003",
			"location" : "Uniondale, NY, USA"
		},
		{
			"employer" : "Zurich Capital Markets Australia",
			"title": "Vice President, Technology",
			"description" : "Manage JV with Openlink Financial in NY.",
			"dates worked" : "2001-2002",
			"location" : "Uniondale, NY, USA"
		},
		{
			"employer" : "Macquarie Bank",
			"title": "Associate Director, Quantitative Applications Division",
			"description" : "Develop analytic components in COM.",
			"dates worked" : "1999-2000",
			"location" : "Sydney, Australia"
		}, 
		{
			"employer" : "Bankers Trust Australia",
			"title": "Vice President, Derivatives Technology",
			"description" : "Develop analytic components in COM.",
			"dates worked" : "1994-1999",
			"location" : "Sydney, Australia"
		}
	],
	"display" : function() {
	    for (j in work.jobs) {
	    	$("#workExperience").append(HTMLworkStart);
	      	var job = work.jobs[j];
	      
	     	var employer = HTMLworkEmployer.replace("%data%", job.employer);
	      	var title = HTMLworkTitle.replace("%data%", job.title);
	      	var dates = HTMLworkDates.replace("%data%", job["dates worked"]);
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
			"dates worked" : "1994-1999",
			"description" : "COM business objects",
			"images" : [ "http://placehold.it/200x200" ]
		},
		{
			"title" : "Zeus",
			"dates worked" : "2001",
			"description" : "COM analytics and table",
			"images" : [ "http://placehold.it/200x200" ]
		},
		{
			"title" : "Pandora/OpenComponents",
			"dates worked" : "2003-2014",
			"description" : "Java and .NET business objects",
			"images" : [ "http://placehold.it/200x200" ]
		}
	],
	"display" : function() {
		for (var p in projects.project) {
	    	$("#projects").append(HTMLprojectStart);
	      	var project = projects.project[p];
	      	var title = HTMLprojectTitle.replace("%data%", project.title);
	      	var dates = HTMLprojectDates.replace("%data%", project["dates worked"]);
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
			"location" : "Sydney, Australia",
			"degree" : "Bachelor of Science (Honours 1st Class)",
			"majors"  : ["CompSci", "Pure Maths"],
			"dates attended" : "1986-1989",
			"url" : "http://sydney.edu.au"
		},
		{
			"name" : "University of Technology Sydney",
			"location" : "Sydney, Australia",
			"degree" : "Master of Business (Finance)",
			"dates attended" : "1998-2000",
			"majors"  : ["Quantitative Finance"],
			"url" : "http://www.uts.edu.au"
		}
	],
	"onlineCourses" : [
		{
			"title" : "CS169.1x Software as a Service",
			"school" : "edX",
			"dates attended" : "October-November 2013",
			"url" : "https://www.edx.org/course/engineering-software-service-uc-berkeleyx-cs169-1x"
	 	},
		{
			"title" : "CS169.2x Software as a Service, Part 2 (rev Fall 2013)",
			"school" : "edX",
			"dates attended" : "November 2013-January 2014",
			"url" : "https://www.edx.org/course/engineering-software-service-part-2-uc-berkeleyx-cs169-2x"
	 	},
		{
			"title" : "Unpredictable? Randomness, Chance and Free Will",
			"school" : "Coursera",
			"dates attended" : "January-March 2014",
			"url" : "http://class.coursera.org/randomness"
	 	},
		{
			"title" : "Developing Scalable Apps with Java",
			"school" : "Udacity",
			"dates attended" : "September-October 2014",
			"url" : "http://www.udacity.com/course/ud859"
	 	},
		{
			"title" : "Web Application Architectures",
			"school" : "Coursera",
			"dates attended" : "August-September 2014",
			"url" : "http://class.coursera.org/webapplications"
	 	},
		{
			"title" : "Functional Programming Principles in Scala",
			"school" : "Coursera",
			"dates attended" : "September-November 2014",
			"url" : "http://class.coursera.org/progfun-005"
	 	},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates attended" : "December 2014",
			"url" : "http://www.udacity.com/course/ud804"
	 	}
	],
	"display" : function() {
    	for (var s in education.schools) {
      		$("#education").append(HTMLschoolStart);
            var school = education.schools[s];
		    var name = HTMLschoolName.replace("%data%", school.name);
		    var degree = HTMLschoolDegree.replace("%data%", school.degree);
		    var dates = HTMLschoolDates.replace("%data%", school["dates attended"]);
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
		        var dates = HTMLonlineDates.replace("%data%", course["dates attended"]);
		        var url = HTMLonlineURL.replace("%data%", course.url);
		        $(".education-entry:last").append(title + school + dates + url);
		    }
		}
	}
};


