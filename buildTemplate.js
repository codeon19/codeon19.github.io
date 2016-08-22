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
        "heading":               "Samuel Breck",
        "briefDescription":      "I am currently a student at the University of Southern California studying Computer Science and Business Administration. It is here that I am currently developing my passion for programming and natural affinity for business. Born and raised in the heart of the Silicon Valley, I will pursue a future in innovation wherever I end up.",
        "showHeaderButton":     false,
        "headerButtonText":     "Show More",
        

        navItems: [
          { name: "Experience"   },
          { name: "Education"    },
          { name: "Skills"       },
          { name: "Projects"       },
          { name: "Contact"      }
        ],

        portfolioItems: false,

        "showExperienceSection":  true, 
        "experienceHeading":      "Experience",
        "experienceSubHeading":   "", 

        experienceItems: [
          { 
            company:    "CSchedule",
            position:   "Web Developer",
            time:       "Summer 2015",
            place:      "Santa Clara, CA",
            bullets: [
              { bullet: "Acquired basics of JavaScript and its applications"        },
              { bullet: "Experienced firsthand Silicon Valley startup operations"        }
            ]
          },

          { 
            company:    "TPK Touch Solutions, Inc.",
            position:   "Sales and Marketing Intern",
            time:       "Summer 2014",
            place:      "Xiamen, China",
            bullets: [
              { bullet: "Developed Project Management skills involving production of touchscreens"        },
              { bullet: "Analyzed case studies concerning lifecycle of a product from DVT to fulfillment"        },
              { bullet: "Employed Excel to track sales"        }
            ]
          },

          { 
            company:    "Los Angeles Community Impact",
            position:   "Consultant",
            time:       "Fall 2015 – Present",
            place:      false,
            bullets: [
              { bullet: "Pro-bono consulting club at USC that targets NGOs, social impact businesses, and small businesses in teams of 3 – 5"        },
              { bullet: "Consulted an extant non-profit organization in Fall 2015 with a multimillion-dollar operating budget"        }
            ]
          },

          { 
            company:    "Impact Christian Club",
            position:   "President",
            time:       "Fall 2014 – Spring 2015",
            place:      false,
            bullets: [
              { bullet: "Appointed President senior year after being an active member for 4 years"        },
              { bullet: "Organized inter-district concerts and fundraisers"        },
              { bullet: "Hosted Youth Groups at house during senior year of high school, developing a special community for Christian and non-Christians to discuss religion"        }
            ]
          }

          
        ],

        educationItems: [
          { 
            school:    "University of Southern California, Viterbi School of Engineering",
            degree:    "Bachelor of Science in Computer Science and Business Administration",
            time:      "Fall 2015 – Present",
            place:     "Los Angeles, CA",
            gpa:       "GPA: 3.93"
          },
          { 
            school:    "Saratoga High School",
            time:      "June 2015",
            place:     "Saratoga, California",
            gpa:       false
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
                { skill: "Microsoft Office" }
              ],
          },
          {
              icon: "fa-language",
              skills: [
                { skill: "Fluent in English and understands Chinese" },
                { skill: "Cantonese Chinese" }
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
        "address":              "3305 C1, 902 W. 37th Place, Los Angeles, CA 90007",

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