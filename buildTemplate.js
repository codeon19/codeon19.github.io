$(function () {
      // Grab the template script
      var theTemplateScript = $("#address-template").html();

      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      Handlebars.registerPartial("header", $("#header-partial").html());

      // Define our data object
      var context=
      {
        "name":                 "Samuel Breck",
        "leadIn":                false,
        "headingLeft":           false, //true means heading is left aligned with a small column
        "heading":               "Hi! I'm Samuel.",
        "showHeaderButton":     false,
        "headerButtonText":     "Show More",


        navItems: [
          { name: "Experience"   },
          { name: "Education"    },
          { name: "Skills"       },
          { name: "Projects"     },
          { name: "Contact"      }
        ],

        portfolioItems: false,

        "showExperienceSection":  true,
        "experienceHeading":      "Experience",
        "experienceSubHeading":   "",

        experienceItems: [
          {
            company:    "Valon",
            position:   "Product Manager",
            time:       "January 2022 - Present",
            place:      "New York, NY",
          },
          {
            company:    "Microsoft",
            position:   "Product Manager",
            time:       "Fall 2019 - December 2021",
            place:      "Seattle, WA",
          },
          {
            company:    "Bloomberg LP",
            position:   "Software Engineering Intern",
            time:       "Summer 2018",
            place:      "New York, NY",
            bullets: [
                { bullet: "Developed an automated pipeline for translating Earnings/Economic Data into a tabular format under the Bloomberg News Automation Team" },
                { bullet: "Validated MVP w/ customers by through multiple demos and feedback sessions" },
                { bullet: "Full-stack application developed in JavaScript (R+), Python (BAS), and SQL (Comdb2)" }
            ]
          },
          {
            company:    "PlayStation",
            position:   "Software Engineering Intern",
            time:       "Summer 2017",
            place:      "San Jose, CA",
            bullets: [
                { bullet: "Planned, developed, tested, and launched major/minor features for the PlayStation Store team on the PS4 console (PS Store Search 2.0, Credit Card validation)" },
                { bullet: "Front-end development concentrated on scalability (60 million users) and framerate (60fps), developed in XML/CSS, Web GL, and a custom JavaScript framework" }
            ]
          },
          {
            company:    "USC Institute for Creative Technologies",
            position:   "Student Researcher",
            time:       "Fall 2017 - Spring 2018",
            place:      "Playa Vista, CA",
            bullets: [
                { bullet: "Developed and built an “Alexa for mentorship” research funded project for potential STEM high school students, mentorpal.org" },
                { bullet: "Developed data-processing pipeline capturing the life experiences of STEM mentors" },
                { bullet: "Helped implement, train, and reduce an NLP model to provide a more immersive and streamlined experience (Q/A improved from 47% to 61% perfect match accuracy; Google’s Word corpus reduced by 70% due to memory limits)" }
            ]
          },
          {
            company:    "Prospect Silicon Valley",
            position:   "Project Management Intern",
            time:       "Summer 2016",
            place:      "San Jose, CA",
            bullets: [
                { bullet: "Developed demo app showcasing DSRC technology in a simulated environment"},
                { bullet: "Streamlined the client on-boarding system and integrated various lead pipelines"},
                { bullet: "Conducted aggregate purchase surveys for prospective cities leasing EV Fleets"}
            ]
          },
          {
            company:    "CSchedule",
            position:   "Software Engineering Intern",
            time:       "Summer 2015, 2016",
            place:      "Santa Clara, CA",
            bullets: [
              { bullet: "Learned HTML, CSS, and JavaScript with JQuery and Backbone framework" },
              { bullet: "Explored various API’s include Drop.js and Facebook login" },
              { bullet: "Designed logic of architecture involving asynchronous calls" }
            ]
          },
          {
            company:    "TPK Touch Solutions, Inc.",
            position:   "Project Management Intern",
            time:       "Summer 2014",
            place:      "Xiamen, China",
            bullets: [
              { bullet: "Developed Project Management skills involving production of touchscreens"        },
              { bullet: "Analyzed case studies concerning lifecycle of a product from DVT to fulfillment"        }
            ]
          }
        ],

        educationItems: [
          {
            school:    "University of Southern California, Viterbi School of Engineering",
            degree:    "Bachelor of Science in Computer Science",
            time:      "September 2015 – May 2019",
            place:     "Los Angeles, CA"
          },
          {
            school:    "Saratoga High School",
            time:      "June 2015",
            place:     "Saratoga, CA",
            gpa:       "Graduated with Honors"
          }
        ],

        "showAwardSection": false,
        awardItems: false, /*[
          {
            award:    "NATIONAL HONORS SOCIETY",
            time:      "AUGUST 2011 - JUNE 2015"
          },
          {
            award:    "CALIFORNIA SCHOLARSHIP FOUNDATION",
            time:      "AUGUST 2011 - JUNE 2015"
          },
          {
            award:    "NATIONAL HONORS ART SOCIETY",
            time:      "AUGUST 2011 - JUNE 2015"
          },
          {
            award:    "FOUR AWARDS AT 2015 SAN MATEO MAKER FAIRE FOR SENIOR CAPSTONE PROJECT",
            time:      "MAY 2015"
          }
        ],*/

        "skillColumnType": "col-md-4",
        "skillsHeading": "Skills & Interests",
        skillItems: [
          {
              icon: "fa-laptop",
              skills: [
                { skill: "C++ and Java (Android)" },
                { skill: "HTML/CSS/JavaScript" },
                { skill: "JQuery/Web GL/Backbone/ReactJS/NodeJS" },
                { skill: "MondoDB" },
                { skill: "Python" }
              ],
          },
          {
              icon: "fa-futbol-o",
              skills: [
                { skill: "SEL in Education" },
                { skill: "Philosophy" },
                { skill: "Los Angeles"},
                { skill: "Soccer" },
                { skill: "Violin" },
              ],
          },
          {
              icon: "fa-language",
              skills: [
                { skill: "English" },
                { skill: "Chinese" }
              ],
          }
        ],

        "email":                "samuelbreck19@gmail.com",
        "phone":                "(408)-858-3628",

        socialItems: [
          {
            icon: "fa-github",
            link: "https://github.com/codeon19"
          },

          {
            icon: "fa-linkedin",
            link: "https://www.linkedin.com/in/samuel-breck-164703109"
          },
          {
            icon: "fa-university",
            link: "https://scholar.google.com/citations?user=9bWFKCEAAAAJ&hl=en&citsig=ALAJMKFOM4MIIWHG9BPj8SUDJFW_"
          }
        ]

      };

      Handlebars.registerHelper('navList', function(items, options) {
        var out = "";
        for(var i=0, l=items.length; i<l; i++) {
          var s = options.fn(items[i]);
          while(s.charAt(0) === ' ')
            s = s.slice(1);

          out = out + '<li><a class="page-scroll" href="#' + s + '"">'
              + s +  '</a></li>';
        }

        return out;
      });

      Handlebars.registerHelper('nestEach', function(context, options) {
        var ret = "";

        for(var i=0, j=context.length; i<j; i++) {
          ret = ret + options.fn(context[i]);
        }

        return ret;
      });

      Handlebars.registerHelper("inc", function(value, options)
      {
          return parseInt(value) + 1;
      });

      Handlebars.registerHelper("oldBuildImgs", function(directory, options)
      {
          var image_count;
          var ajaxData;
          directory = directory + 1;
          var imgList =  $.ajax({
              url: "/img/portfolio/" + directory,
              dataType: "html",
              async: false,
              success: function (data) {
                  return data;
              }
          });

          imgList = imgList.responseText;

          var el = $( '<div></div>' );
          el.html(imgList);
          image_count = $('li', el).length - 1; //subtract 1 because of preview
          console.log(image_count);

          var ret = "";

          for(var i=1; i<image_count; i++) {
            ret = ret + '<img class="img-responsive img-centered" src="img/portfolio/' + directory + '/' + i + '.jpg" alt="">';
          }

          return ret;


      });

      Handlebars.registerHelper("buildImgs", function(directory, options)
      {
          var image_count;
          var ajaxData;
          directory = directory + 1;
          var imgList =  $.ajax({
              url: "/img/portfolio/" + directory,
              dataType: "html",
              async: false,
              success: function (data) {
                  return data;
              }
          });

          imgList = imgList.responseText;

          var el = $( '<div></div>' );
          el.html(imgList);
          image_count = $('li', el).length - 1; //subtract 1 because of preview
          console.log(image_count);

          var ret = "";

          for(var i=1; i<image_count; i++) {
            ret = ret + '<img class="img-responsive img-centered" src="img/portfolio/' + directory + '/' + i + '.jpg" alt="">';
          }

          return new Handlebars.SafeString(ret);


      });

      $('title').html(context.name);

      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);

      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);
      animatedHeader();
    });
