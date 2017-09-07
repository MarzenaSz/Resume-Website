// declare global variable that stores %data% string
var data = "%data%";
// ***************************************************** //
// ****************** BIOGRAPHY OBJECT ***************** //
var biography = {
	"name": "Marzena Szopinska",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "+44 7722 94 5555",
		"mail": "marzena_szopinska@hotmail.com",
		"github": "MarzenaSz",
		"linkedin": "https://www.linkedin.com/in/marzenaszopinska/",
		"location": "Brentford, London"
	},
	"picture": "resources/images/picture.jpg",
	"welcomingMessage": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae cat.",
	"skills": ["JavaScript", "jQuery", "HTML", "CSS", "Git", "GitHub", "Bootstrap", "AJAX"]
};
//encapsulate biography information
biography.display = function() {
	// * FULL NAME * //
	// replace %data% with an actual full name
	var formattedHeaderName = HTMLHeaderName.replace(data, biography.name);
	// target the first child of the header
	var fullName = $("header").children().first();
	// ..and insert full name inside it
	fullName.append(formattedHeaderName);

	// * ROLE * //
	// replace %data% with an actual role
	var formattedRole = HTMLHeaderRole.replace(data, biography.role);
	// target the second child of the header
	var role = $("header").children().eq(1);
	// ..and insert role inside it
	role.append(formattedRole);

	// * PICTURE * //
	// replace %data% with a picture
	var formattedPicture = HTMLHeaderPicture.replace(data, biography.picture);
	// target the third child of the header and its first child of that row
	var picture = $("header").children().eq(2).children().first();
	// ..and insert the picture inside the column
	picture.append(formattedPicture);
	// check if the picture exist
	if(picture != null) {
		// target the picture and add an alt attribute that describes the picture 
		picture.find('img').attr("alt", "the owner's picture of this resume");
	}

	// * CONNTACTS * //
	// replace %data% with the right contact information
	var formattedHeaderMobile = HTMLHeaderMobile.replace(data, biography.contacts.mobile);
	var formattedHeaderEmail = HTMLHeaderEmail.replace(data, biography.contacts.mail);
	var formattedHeaderLinkedIn = HTMLHeaderLinkedIn.replace(data, biography.contacts.linkedin);
	var formattedHeaderGitHub = HTMLHeaderGitHub.replace(data, biography.contacts.github);
	var formattedHeaderLocation = HTMLHeaderLocation.replace(data, biography.contacts.location);
	// target the last child of third header's child
	var contact = $(".contact-list");
	// ..and insert the contact info inside the second column
	contact.append(formattedHeaderEmail);
	//$('.contact-list, #footer-contacts').append(formattedHeaderMobile, formattedHeaderEmail);
	contact.append(formattedHeaderLinkedIn);
	contact.append(formattedHeaderGitHub);
	contact.append(formattedHeaderLocation);
	// insert mobile number at the beggining of targeted element
	contact.prepend(formattedHeaderMobile);
	// * WELCOMING MESSAGE * //
	// replace %data% with the welcoming message
	var formattedHeaderMessage = HTMLHeaderMessage.replace(data, biography.welcomingMessage);
	// target 4th child of the header
	var welcomeMsg = $("header").children().eq(3);
	 // ..and insert the message inside it
	 welcomeMsg.append(formattedHeaderMessage);
	// add a class to the paragraph
	welcomeMsg.find('p').addClass("welcoming-msg");

	// * SKILLS * //
	// check if skills exist inside of the biography object
	if(biography.skills.length > 0) {
		// insert skill title inside 5th child of the header
		var skillTitle = $("header").children().eq(4);
		skillTitle.append(HTMLHeaderSkillTitle);
		// add a class to h3 title
		skillTitle.children().addClass("skill-title");
		// target the last row that belongs to the header
		var skill = $(".skill-list");
		// loop through each skill
		biography.skills.forEach(function(i){
			// replace %data% of the skill with a proper name
			var formattedSkill = HTMLHeaderSkill.replace(data, i);
			// insert the skill inside of the last header child
			skill.append(formattedSkill);
		});
	}
	// ********************* FOOTER ************************ //
	// target h2 text inside footer's first child row
	var letsConnect = $("footer").children().first().children();
	// make h2 element into a link and prevent linking to the begging of the page after clicking it
	letsConnect.wrap('<a href="#footer-contacts" />');
	// target unordered list iside of the footer
	var footerList = $("#footer-contacts");
	// fill in empty data with contact information
	var formattedFooterMobile = HTMLFooterMobile.replace(data, biography.contacts.mobile);
	var formattedFooterEmail = HTMLFooterEmail.replace(data, biography.contacts.mail);
	// push a list that contains email and mobile number information inside ul element
	footerList.append(formattedFooterMobile);
	footerList.append(formattedFooterEmail);
	// add copyrighs to the footer 
	$('footer').append(HTMLcopyRight);
	// add classes
	$('footer').children().first().addClass("footer-row");
	$('footer').children().eq(1).addClass("footer-row");

};
// ***************************************************** //
// ********************* EDUCATION ********************* //
var education = {
	"schools": [{
		"name": "Team of schools of economic service in Zychlin",
		"location": "Zychlin, Poland",
		"dates": "2005 - 2009",
		"degree": "Hospitality degree",
		"description": "Rnde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
		"url": "http://zychlin.edu.pl/"
	}],
	"onlineCourses": [{
		"name": "Udacity",
		"program": "Front-End Web Developer Nanodegree",
		"dates": "2017/05 - 2017/09",
		"description": "Ande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
	},
	{
		"name": "Udemy",
		"program": "Responsive Real World Websites with HTML5 and CSS",
		"dates": "2017/06 - 2017/07",
		"description": "Ande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
	},
	{
		"name": "City&Guilds - Train2Game",
		"program": "Game Developer",
		"dates": "2014/01 - 2017/01",
		"description": "Ande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
	},
	{
		"name": "Codecademy",
		"program": "JavaScript",
		"dates": "2017/08 - 2017/09",
		"description": "Ande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
	}]
};
// encapsulate education information
education.display = function() {
	// check if school exists inside of the education object
	if(education.schools.length > 0) {
		// insert a row with a title for education
		$(".section-education").append(HTMLschoolInit);
		// loop through each school and replace empty data with actual information
		education.schools.forEach(function(j){
			// target the first row inside of section education and after this row add another start row for school info
			$(".section-education").append(HTMLschoolStart);
			// insert a column inside a row with education-info class
			$(".education-info:last").append(HTMLInfoSeparator);
			// insert another column inside a row with education-info class
			$(".education-info:last").append(HTMLDataSeparator);
			// target the first column inside of the row with info class
			var firstColInfo = $(".info:last");
			// target the second column inside of the row with date class
			var secondColDate = $(".date:last");
			// replace %data% with actual information about particular school
			var formattedSchoolName = HTMLschoolName.replace(data, j.name);
			
			var formattedSchoolDegree = HTMLschoolDegree.replace(data, j.degree);
			var formattedSchoolDates = HTMLschoolDates.replace(data, j.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace(data, j.location);
			var formattedSchoolInfo = HTMLschoolInfo.replace(data, j.description);
			var formattedSchoolUrl = HTMLschoolUrl.replace(data, j.url);
			// push all the information inside first column (thats why we use :last)
			firstColInfo.append(formattedSchoolName);
			firstColInfo.append(formattedSchoolDegree);
			// add a class to second span insiade first column
			firstColInfo.children().eq(1).addClass("degree");
			firstColInfo.append(formattedSchoolLocation);
			firstColInfo.append(formattedSchoolInfo);
			firstColInfo.append(formattedSchoolUrl);
			// add a class to the first span child of the first column 
			firstColInfo.children().first().addClass("school-title");
			// push dates to the second column
			secondColDate.append(formattedSchoolDates);
		});
	}
	// check if online courses exist inside on the education object
	if(education.onlineCourses.length > 0) {
		// insert a row with a title for online education
		$(".section-education").append(HTMLonlineSchoolInit);
		// loop through each online school and replace empty data with actual information
		education.onlineCourses.forEach(function(k){
			// insert another row with an online-education-info class
			$(".section-education").append(HTMLonlineSchoolStart);
			// add a column inside this row to store all the online school information, apart from dates
			$(".online-education-info:last").append(HTMLInfoSeparator);
			// add another column inside this row to store all the dates
			$(".online-education-info:last").append(HTMLDataSeparator);
			// target onlineInfo column to store online school information
			 var firstColOnlineInfo = $(".info:last");
			 // target the second column to store online school dates
			 var secondColOnilneDates = $(".date:last");
			// replace %data% with actual online school information
			var formattedOnlineName = HTMLonlineName.replace(data, k.name);
			var formattedOnlineProgram = HTMLonlineProgram.replace(data, k.program);
			var formattedOnlineDates = HTMLonlineDates.replace(data, k.dates);
			var formattedOnlineInfo = HTMLonlineInfo.replace(data, k.description);
			// insert the information to the page
			firstColOnlineInfo.append(formattedOnlineName);
			firstColOnlineInfo.children().eq(0).addClass("course-title");
			firstColOnlineInfo.append(formattedOnlineProgram);
			firstColOnlineInfo.append(formattedOnlineInfo);
			// insert dates to the page
			secondColOnilneDates.append(formattedOnlineDates);
		});
	}
};
// ***************************************************** //
// ********************* PROJECTS ********************** //
var projects = {
	"projects": [{
			"title": "Bio Cake Website",
			"dates": "June - July, 2017",
			"image": "resources/images/bioCake.JPG",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url": "https://marzenasz.github.io/"
		},
		{
			"title": "Example Portfolio Website",
			"dates": "August, 2017",
			"image": "resources/images/examplePortfolio.jpg",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url": "https://marzenasz.github.io/ExamplePortfolio/"
		},
		{
			"title": "Gallery Website",
			"dates": "August, 2017",
			"image": "resources/images/galleryWebsite.jpg",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url": "https://marzenasz.github.io/GalleryWebsite/"
	}]
};
// encapsulate projects information
projects.display = function() {
	// append text indicating start for the project section
	$('.section-projects').append(HTMLprojectInit);
	// append a row that will hold all of the information
	$('.section-projects').append(HTMLprojectStart);
	// append an icon --------------------------------------------------------------------------------------TO DO -------------------------------------------------------------------------------
	$('.section-projects').append('<i class="ion-arrow-right-c"></i>');
	$('.section-projects').append(HTMLprojectInfo);
	// check if there are any projects inside projects object
	if(projects.projects.length > 0){
		// loop through each project inside projects object
		projects.projects.forEach(function(l){
			// create a new column for this project
			$('.projects-info').append(HTMLprojectSeparator);
			// replace empty data with proper information
			formattedProjectTitle = HTMLprojectTitle.replace(data, l.title);
			formattedProjectDates = HTMLprojectDates.replace(data, l.dates);
			formattedProjectImage = HTMLprojectImage.replace(data, l.image);
			formattedProjectDesc = HTMLprojectDescription.replace(data, l.description);
			formattedProjectUrl = HTMLprojectUrl.replace(data, l.url);
			// target the column that has been created for this project
			var projectColumn = $('.project-col:last');

			// add all of these project information to the page
			projectColumn.append(formattedProjectTitle);
			projectColumn.append(formattedProjectDates);
			projectColumn.append(formattedProjectImage);
			
			projectColumn.append(formattedProjectDesc);
			projectColumn.append(formattedProjectUrl);
			// wrap the image in an anchor
			projectColumn.find('img').wrap('<a />');
			// find the link and att href attribute that points to the right address
			projectColumn.find('a').attr('href', l.url);
			// add target _blank to all a so every link will open in a new window 
			projectColumn.find('a').attr('target', '_blank');
			// target url link for projects 
			var link = $('.url:last');
			// wrap it with a span with a text inside it 
			link.wrap('<span />').text(l.url);

		});
		
		
	}
	
};

// ***************************************************** //
// ***************** INVOKE FUNCTIONS ****************** //

// display biography to the page
biography.display();
// display education to the page
education.display();
// display projects to the page
projects.display();

