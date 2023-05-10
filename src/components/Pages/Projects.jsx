import React from "react";
import classes from "./Projects.module.css";
import ProjectContainer from "../layout/ProjectContainer";

const Projects = () => {
  const project1 =
    "Developed a RESTful API of a stadium management system using the following techonlogies: Node.js, Express.js, Microsoft SQL Server hosted on AWS, and Postman.";
  const project1Name = "Stadium management system";
  const project1Link = "https://github.com/hitony7/CPSC471_API";

  const project2 =
    "Develped a website that allowed an administrator to set-up a questionnaire in a specific topic and analyze the results witht the following technologies: ASP.NET Core MVC, Microsoft SQL Server on Azure, and Google Pie Charts.";
  const project2Name = "Questionnare Website";
  const project2Link = "https://github.com/bryanlam549/CPSC571Project6";

  const project3 =
    "Created the UI of a mobile app idea named 'Ordine'. The app allows users to make resarvations and pre-order food at restaurants. Created various prototypes using technologies such as Figma.";
  const project3Name = "Ordering and Reservation Mobile App UI/UX";
  const project3Link = "https://cloudyyoung.github.io/ordine-ui-ux/";

  return (
    <div className={classes.container}>
      <span className={classes.arrow}></span>
      <h1 className={classes.h1}>Projects</h1>
      <div className={classes.p1}>
        <ProjectContainer
          projectName={project1Name}
          projectInfo={project1}
          proLink={project1Link}
        />
      </div>
      <div className={classes.p2}>
        <ProjectContainer
          projectName={project2Name}
          projectInfo={project2}
          proLink={project2Link}
        />
      </div>
      <div className={classes.p3}>
        <ProjectContainer
          projectName={project3Name}
          projectInfo={project3}
          proLink={project3Link}
        />
      </div>
    </div>
  );
};

export default Projects;
