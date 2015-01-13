var bio = {
    name: "Craig Kaminski",
    role: "Web Developer",
    contacts: {
    	mobile: "614-314-2071",
		email: "craig.j.kaminski@gmail.com",
		github: "CraigKaminski",
    	twitter: "@Craig_Kaminski",
    	location: "Columbus, OH"
    },
    welcomeMessage: "Welcome to my online resume.",
    skills: ["Git", "HTML", "CSS", "JavaScript", "jQuery"],
    biopic: "images/fry.jpg",
    display: function() {
    	var formattedHeaderRole = HTMLheaderRole.replace('%data%', this.role);
    	$('#header').prepend(formattedHeaderRole);
    	var formattedHeaderName = HTMLheaderName.replace('%data%', this.name);
    	$('#header').prepend(formattedHeaderName);
    	
    	for (var prop in this.contacts) {
    		var formattedContact = eval("HTML" + prop).replace('%data%', this.contacts[prop]);
    		$('#topContacts').append(formattedContact);
    		$('#footerContacts').append(formattedContact);
    	}
    	
    	var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    	$('#header').append(formattedBioPic);
    	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage);
    	$('#header').append(formattedWelcomeMsg);
    	
    	$('#header').append(HTMLskillsStart);
    	for (var i = 0; i < this.skills.length; i++) {
    		var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
    		$('#skills').append(formattedSkill);
    	}
    }
};

var education = {
	schools: [
		{
			name: "The Ohio State University",
			location: "Columbus, OH",
			degree: "Bachelor of Science",
			majors: ["Mechanical Engineering"],
			dates: 1997,
			url: "http://www.osu.edu"
		}
	],
	onlineCourses: [
		{
			title: "Modern JavaScript: An Introduction",
			school: "O’Reilly School of Technology",
			date: 2014,
			url: "http://www.oreillyschool.com"
		}, {
			title: "JavaScript: AJAX and JSON",
			school: "O’Reilly School of Technology",
			date: 2014,
			url: "http://www.oreillyschool.com"
		}, {
			title: "Intro to HTML and CSS",
			school: "Udacity",
			date: 2014,
			url: "https://www.udacity.com"
		}, {
			title: "How to Use Git and GitHub",
			school: "Udacity",
			date: 2014,
			url: "https://www.udacity.com"
		}, {
			title: "JavaScript Basics",
			school: "Udacity",
			date: 2014,
			url: "https://www.udacity.com"
		}, {
			title: "Intro to jQuery",
			school: "Udacity",
			date: 2014,
			url: "https://www.udacity.com"
		}
	],
	display: function() {}
};

var work = {
	jobs: [
		{
			employer: "Nationwide Mutual Insurance Company",
			title: "Linux Engineer",
			location: "Columbus, OH",
			dates: "12/2007 - Present",
			description: "Administer over 3000 Linux servers running a mix of Red Hat and SUSE Linux. These servers run on a mix of platforms including standalone x86, VMware, and z/VM."
		}, {
			employer: "ICC Consultant for Sterling Commerce",
			title: "UNIX Engineer",
			location: "Columbus, OH",
			dates: "12/2005 - 12/2007",
			description: "Administered 8 HP-UX servers, 92 Linux servers, 7 AIX servers, and 6 Solaris servers including two Sun Fire 15K servers with several domains."
		}, {
			employer: "CBC Companies",
			title: "UNIX Engineer",
			location: "Columbus, OH",
			dates: "3/2000 - 12/2005",
			description: "Administered 21 HP-UX servers, 4 Linux servers, and Solaris servers including a PRIMEPOWER 2500 with 44 processors."
		}
	],
	display: function() {
		for (var i = 0; i < this.jobs.length; i++) {
			var job = this.jobs[i];
			$('#workExperience').append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
			var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
			$('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
			var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
			$('.work-entry:last').append(formattedWorkDates);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
			$('.work-entry:last').append(formattedWorkLocation);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
			$('.work-entry:last').append(formattedWorkDescription);
		}
	}
};

var projects = {
	projects: [
		{
			title: "Mockup to Website",
			dates: "12/2014",
			description: "I was given design mockup as a PDF-file and had to replicate that design in HTML and CSS.",
			images: ["images/197x148.gif", "images/197x148.gif"]
		}, {
			title: "To-Do List",
			dates: "9/2014",
			description: "Created a to-do list web applications that also captured the location of each to-do item and showed it on a map.",
			images: ["images/197x148.gif", "images/197x148.gif"]
		}, {
			title: "The Amazing Box Generator!",
			dates: "6/2014",
			description: "I had to write a program in JavaScript that retrieved information from a form use used that information to draw boxes on the web page.",
			images: ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	display: function() {
		for (var i = 0; i < this.projects.length; i++) {
			var project = this.projects[i];
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
			$('.project-entry:last').append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
			$('.project-entry:last').append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
			$('.project-entry:last').append(formattedProjectDescription);
			for (var j = 0; j < project.images.length; j++) {
				var image = project.images[j];
				var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
				$('.project-entry:last').append(formattedProjectImage);
			}
		}
	}
};

bio.display();
work.display();
projects.display();