import React from "react";
import classes from "./Projects.module.css";
import ProjectContainer from "../layout/ProjectContainer";

const Projects = () => {
  const project0 = "Developed a full stack website using NextJS, Tailwind, and MongoDB. Currently the website is deployed on Vercel. The purpose of the website is to inform users about common and exotic pets.";
  const project0Name = "Pet Information Website";
  const project0Github = "https://github.com/nicou08/pet-app";
  const project0Link = "https://pet-app-theta.vercel.app/";

  const project1 =
    "Developed a RESTful API of a stadium management system using the following techonlogies: Node.js, Express.js, Microsoft SQL Server hosted on AWS, and Postman.";
  const project1Name = "Stadium management system";
  const project1Github = "https://github.com/hitony7/CPSC471_API";
  const project1Link = "";

  const project2 =
    "Develped a website that allowed an administrator to set-up a questionnaire in a specific topic and analyze the results witht the following technologies: ASP.NET Core MVC, Microsoft SQL Server on Azure, and Google Pie Charts.";
  const project2Name = "Questionnare Website";
  const project2Github = "https://github.com/bryanlam549/CPSC571Project6";
  const project2Link = "";

  const project3 =
    "Created the UI of a mobile app idea named 'Ordine'. The app allows users to make resarvations and pre-order food at restaurants. Created various prototypes using technologies such as Figma.";
  const project3Name = "Ordering and Reservation Mobile App UI/UX";
  const project3Github = "https://github.com/cloudyyoung/ordine-ui-ux";
  const project3Link = "https://cloudyyoung.github.io/ordine-ui-ux/";

  return (
    <div className={classes.container}>
      <span className={classes.arrow}></span>
      <h1 className={classes.h1}>Projects</h1>
      <div className={classes.p0}>
        <ProjectContainer
          projectName={project0Name}
          projectInfo={project0}
          proGit={project0Github}
          proLink={project0Link}
        />
      </div>
      <div className={classes.p1}>
        <ProjectContainer
          projectName={project1Name}
          projectInfo={project1}
          proGit={project1Github}
          proLink={project1Link}
        />
      </div>
      <div className={classes.p2}>
        <ProjectContainer
          projectName={project2Name}
          projectInfo={project2}
          proGit={project2Github}
          proLink={project2Link}
        />
      </div>
      <div className={classes.p3}>
        <ProjectContainer
          projectName={project3Name}
          projectInfo={project3}
          proGit={project3Github}
          proLink={project3Link}
        />
      </div>
    </div>
  );
};

export default Projects;
