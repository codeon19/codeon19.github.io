$(function () {
      // Grab the template script
      var theTemplateScript = $("#address-template").html();

      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      Handlebars.registerPartial("header", $("#header-partial").html());

      // Define our data object
      var context={
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
            company:    "Prospect Silicon Valley",
            position:   "Software Engineer/Project Coordinator",
            time:       "Summer 2016",
            place:      "San Jose, CA",
            bullets: [
                { bullet: "Worked on developing applications that combined Prospect Silicon Valley’s Intelligent Transportation Lab and fka Silicon Valley’s Simulation Lab (fka SV is an associated research group with Aachen University)"        },
                { bullet: "Streamlined the client onboarding system and integrated various lead pipelines"        },
                { bullet: "Conducted aggregate purchase surveys for prospective cities leasing EV Fleets"        }
            ]
          },
            
          { 
            company:    "CSchedule",
            position:   "Front-End Web Intern",
            time:       "Summer 2015, 2016",
            place:      "Santa Clara, CA",
            bullets: [
              { bullet: "Learned HTML, CSS, and JavaScript with JQuery and Backbone framework"        },
              { bullet: "Explored various API’s include Drop.js and Facebook login"        },
              { bullet: "Designed logic of architecture involving asynchronous calls"        },
              { bullet: "Utilized advanced Agile principles"        } 
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
          },

          { 
            company:    "Los Angeles Community Impact",
            position:   "Director of Internal Resources/Team Leader",
            time:       "Fall 2015 – Present",
            place:      "Los Angeles, CA",
            bullets: [
              { bullet: "Pro-bono consulting club at USC that consults NGOs/small businesses with multimillion dollar budgets" },
              { bullet: "As Director of IR, designed databases that aggregated past clients, project deliverables, and school resources to facilitate client acquisition and project operations"        },
              { bullet: "As Team Leader, currently managing a team for the Harold Robinson Foundation"        } 
            ]
          }
        ],

        educationItems: [
          { 
            school:    "University of Southern California, Viterbi School of Engineering",
            degree:    "Bachelor of Science in Computer Science and Business Administration",
            time:      "Fall 2015 – Present",
            place:     "Los Angeles, CA",
            gpa:       "GPA: 3.58"
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
                { skill: "Java and C++" },
                { skill: "Android Development" },
                { skill: "HTML, CSS, JavaScript" },
                { skill: "Backbone" },  
                { skill: "Microsoft Excel" }
              ],
          },
          {
              icon: "fa-language",
              skills: [
                { skill: "English" },
                { skill: "Chinese" }
              ],
          },
          {
              icon: "fa-futbol-o",
              skills: [
                { skill: "Typography" },
                { skill: "Soccer" },
                { skill: "Philosophy" },
                { skill: "Violin" }
              ],
          }
        ],

        "email":                "breck@usc.edu",
        "phone":                "(408)-858-3628",
        "address":              "D534, 3131 S. McClintock Avenue, Los Angeles, CA 90007",

        socialItems: [
          {
            icon: "fa-github",
            link: "https://github.com/codeon19"
          },

          {
            icon: "fa-linkedin",
            link: "https://www.linkedin.com/in/samuel-breck-164703109"
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