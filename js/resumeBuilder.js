/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "Dian Sadulloh",
    "role": "Web Developer",
    "contacts": {
        "email": "me@dians.me",
        "github": "emozonic",
        "twitter": "@diansadulloh",
        "location": "Demak, Central Java, ID"
    },
    "picture": "images/pp.jpg",
    "welcomeMessage": "I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces.",
    "skills": ["Photoshop", "Illustrator", "HTML5", "CSS3", "SEO"]
};

var work = {
    "jobs": [
        {
            "employer": "Travelling Press",
            "title": "Founder",
            "location": "Demak, Central Java, ID",
            "datesWorked": "Juny 2016 - Current",
            "description": "Travelling Press: The ultimate guide to travel and inspirational adventures around the world."
        },
        {
            "employer": "Kopi Luwak Shop",
            "title": "Founder",
            "location": "Demak, Central Java, ID",
            "datesWorked": "January 2016 - Current",
            "description": "For the purpose of making the purchase of kopi luwak coffee more transparent and safe, we decided to list the most reliable kopi luwak shops on this website. Moreover, we created a quality certificate for this extraordinary coffee experience."
        }
    ]
};

var education = {
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Android Basics Nanodegree by Google",
            "completed": "Juny 2016",
            "url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
        },
        { "school": "Udacity",
            "title": "Front-End Web Developer Nanodegree",
            "completed": "Juny 2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Build a Portfolio Site",
            "datesWorked": "December 2014 - January 2015",
            "description": "Udacity Front-End Web Developer project",
            "images": ["images/portfolio.jpg"],
            "url": "http://dians.me/Udacity-Project-Build-a-Portfolio-Site/"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();


projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);