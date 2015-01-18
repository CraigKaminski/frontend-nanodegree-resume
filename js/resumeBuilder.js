var bio = {
    "name": "Craig Kaminski",
    "role": "Web Developer",
    "contacts": {
    	"mobile": "614-314-2071",
		"email": "craig.j.kaminski@gmail.com",
		"github": "CraigKaminski",
    	"twitter": "@Craig_Kaminski",
    	"location": "Hilliard, OH"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": ["Git", "HTML", "CSS", "JavaScript", "jQuery"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    var formattedHeaderRole = HTMLheaderRole.replace('%data%', this.role);
	$('#header').prepend(formattedHeaderRole);
   	var formattedHeaderName = HTMLheaderName.replace('%data%', this.name);
   	$('#header').prepend(formattedHeaderName);

	// Loop through properties of the contacts object
   	for (var prop in this.contacts) {
   		// Use eval to find evaluate the variable name created from the concatenation 
   		// of 'HTML' and the current property name in the contacts object
   		var formattedContact = eval('HTML' + prop).replace('%data%', this.contacts[prop]);
   		$('#topContacts').append(formattedContact);
   		$('#footerContacts').append(formattedContact);
   	}

   	var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
   	$('#header').append(formattedBioPic);
   	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage);
   	$('#header').append(formattedWelcomeMsg);

   	$('#header').append(HTMLskillsStart);
   	// Loop through skills array
   	for (var i = 0; i < this.skills.length; i++) {
   		var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
   		$('#skills').append(formattedSkill);
   	}
};

var education = {
	"schools": [
		{
			"name": "The Ohio State University",
			"location": "281 W. Lane Ave., Columbus, OH 43210",
			"degree": "Bachelor of Science",
			"majors": ["Mechanical Engineering"],
			"dates": 1997,
			"url": "http://www.osu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Modern JavaScript: An Introduction",
			"school": "O’Reilly School of Technology",
			"date": 2014,
			"url": "http://www.oreillyschool.com/individual-courses/introjavascript/"
		}, {
			"title": "JavaScript: AJAX and JSON",
			"school": "O’Reilly School of Technology",
			"date": 2014,
			"url": "http://www.oreillyschool.com/individual-courses/ajax/"
		}, {
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2014,
			"url": "https://www.udacity.com/course/ud304"
		}, {
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": 2014,
			"url": "https://www.udacity.com/course/ud775"
		}, {
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2014,
			"url": "https://www.udacity.com/course/ud804"
		}, {
			"title": "Intro to jQuery",
			"school": "Udacity",
			"date": 2014,
			"url": "https://www.udacity.com/course/ud245"
		}
	]
};

education.display = function() {
	// Loop through schools array
	for (var i = 0; i < this.schools.length; i++) {
		var school = this.schools[i];
		$('#education').append(HTMLschoolStart);
		// Replace the # and %data% place holders with the url and school name, respectively
		var formattedSchoolName = HTMLschoolName.replace('#', school.url).replace('%data%', school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
		// Concatenate the school name and degree before appending to the DOM
		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
		$('.education-entry:last').append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
		$('.education-entry:last').append(formattedSchoolLocation);
		
		// Create an empty string to hold majors
		var majors = '';
		// Loop through majors array for each school
		for (var j = 0; j < school.majors.length; j++) {
			// If this is the last major in the list, only append the string
			if (j === school.majors.length - 1) {
				majors += school.majors[j];
			// Otherwise, add the major and a comma to separate this major form the next
			} else {
				majors += school.majors[j] + ', ';
			}
		}
		var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', majors);
		$('.education-entry:last').append(formattedSchoolMajors);
	}

	$('#education').append(HTMLonlineClasses);

	// Loop through onlineCourses array
	for (var i = 0; i < this.onlineCourses.length; i++) {
		var onlineCourse = this.onlineCourses[i];
		$('#education').append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('#', onlineCourse.url).replace('%data%', onlineCourse.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
		// Concatenate course title and school before appending it to the DOM
		$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', onlineCourse.date);
		$('.education-entry:last').append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace('#', onlineCourse.url).replace('%data%', onlineCourse.url);
		$('.education-entry:last').append(formattedOnlineURL);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Nationwide Mutual Insurance Company",
			"title": "Linux Engineer",
			"location": "One Nationwide Plaza, Columbus, OH 43215",
			"dates": "12/2007 - Present",
			"description": "Administer over 3000 Linux servers running a mix of Red Hat and SUSE Linux. These servers run on a mix of platforms including standalone x86, VMware, and z/VM.",
			"url": "http://www.nationwide.com"
		}, {
			"employer": "ICC Consultant for Sterling Commerce",
			"title": "UNIX Engineer",
			"location": "2500 Corporate Exchange Drive, Columbus, OH 43231",
			"dates": "12/2005 - 12/2007",
			"description": "Administered 8 HP-UX servers, 92 Linux servers, 7 AIX servers, and 6 Solaris servers including two Sun Fire 15K servers with several domains.",
			"url": "http://icctechnology.com"
		}, {
			"employer": "CBC Innovis",
			"title": "UNIX Engineer",
			"location": "250 East Town Street, Columbus, OH 43215",
			"dates": "3/2000 - 12/2005",
			"description": "Administered 21 HP-UX servers, 4 Linux servers, and Solaris servers including a PRIMEPOWER 2500 with 44 processors.",
			"url": "http://www.cbcinnovis.com"
		}
	]
};

work.display = function() {
	// Loop through jobs array
	for (var i = 0; i < this.jobs.length; i++) {
		var job = this.jobs[i];
		$('#workExperience').append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace('#', job.url).replace('%data%', job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
		// Concatenate employer and title before adding them to the DOM
		$('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
		var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedWorkDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "Mockup to Website",
			"dates": "12/2014",
			"description": "I was given design mockup as a PDF-file and had to replicate that design in HTML and CSS.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}, {
			"title": "To-Do List",
			"dates": "9/2014",
			"description": "Created a to-do list web applications that also captured the location of each to-do item and showed it on a map.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}, {
			"title": "The Amazing Box Generator!",
			"dates": "6/2014",
			"description": "I had to write a program in JavaScript that retrieved information from a form use used that information to draw boxes on the web page.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}
	]
};

projects.display = function() {
	// Loop through projects array
	for (var i = 0; i < this.projects.length; i++) {
		var project = this.projects[i];
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
		$('.project-entry:last').append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
		$('.project-entry:last').append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(formattedProjectDescription);
		
		// Loop through images array for each project
		for (var j = 0; j < project.images.length; j++) {
			var image = project.images[j];
			var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);