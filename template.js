<nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">{{name}}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    {{#navList navItems}} {{name}} {{/navList}}
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <header>
        <div class="container">
            <div class="intro-text">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <div class="intro-heading">
                            {{name}}
                        </div>
                        </div>
                    </div>
                {{#if showHeaderButton}}
                <a href="#portfolio" class="page-scroll btn btn-xl">{{headerButtonText}}</a>
                {{/if}}
        </div>
    </header>

     <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Experience</h2>
                    <!--<h3 class="section-subheading text-muted">Here are some of my past experiences.</h3>-->
                </div>
            </div>
            <div class="row">
                <br/>
                <div class="col-md-1">
                </div>
                <div class="col-md-10">

                    <div class="experience-panel">
                        <div class="experience-heading">
                            <h5 class="subheading">Mission Street Manufacturing</h5>
                            <h4>Summer 2014</h4>
                            <br/>
                            <h6>Intern</h6>
                            <br/>
                        </div>
                        <div class="timeline-body">
                            <p>Used CAD, Soldering, and Laser cutting to improve the company’s 3D printing technology</p>
                            <p>Responsibilities included design, 3D printing, creating demos and inventory management</p>
                            <p>Documented the build process of the 3D printers for external replication</p>
                        </div>
                    </div>

                    <div class="experience-panel">
                        <div class="experience-heading">
                            <h5 class="subheading">DPEA Mechatronics Senior Capstone Project</h5>
                            <h4>August 2014 - May 2015</h4>
                            <br/>
                            <h6>Student, Team Member</h6>
                            <br/>
                        </div>
                        <div class="timeline-body">
                            <p>Designed, manufactured and presented an autonomous structure that combines elements of engineering, physics, and art</p>
                            <p>Worked collaboratively with mentors</p>
                        </div>
                    </div>

                    <div class="experience-panel">
                        <div class="experience-heading">
                            <h5 class="subheading">Santa Barbara City College</h5>
                            <h4>August 2013 - May 2015</h4>
                            <br/>
                            <h6>Tutor</h6>
                            <br/>
                        </div>
                        <div class="timeline-body">
                            <p>Graded and read work for Italian language college students</p>
                            <p>Tutored students for Italian classes</p>
                        </div>
                    </div>
                    <div class="experience-panel">
                        <div class="experience-heading">
                            <h5 class="subheading">She&#39;s So Made in Italy</h5>
                            <h4>Summer 2013</h4>
                            <br/>
                            <h6>Intern</h6>
                            <br/>
                        </div>
                        <div class="timeline-body">
                            <p>Tracked design process</p>
                            <p>Assisted in various steps of the production process</p>
                            <p>Compiled findings of design process into an online presentation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>