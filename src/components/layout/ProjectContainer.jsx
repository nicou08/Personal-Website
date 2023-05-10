import React from "react";
import classes from "./ProjectContainer.module.css";
import githubLogo from "../../assets/github-mark-white.png";

const ProjectContainer = (props) => {
  return (
    <div>
      <div className={classes.line1}></div>
      <div className={classes.r1}></div>
      <div className={classes.pName}>{props.projectName}</div>
      <div className={classes.info}>{props.projectInfo}</div>
      <a href={props.proLink} target="_blank">
        <img src={githubLogo} alt="github logo" className={classes.proLink} />
      </a>
    </div>
  );
};

export default ProjectContainer;
