import React from "react";
import classes from "./ProjectContainer.module.css";
import githubLogo from "../../assets/github-mark-white.png";
import externalLink from "../../assets/external_link_icon_1.png";

const ProjectContainer = (props) => {
  return (
    <div>
      <div className={classes.line1}></div>
      <div className={classes.r1}></div>
      <div className={classes.pName}>{props.projectName}</div>
      <div className={classes.info}>{props.projectInfo}</div>
      {props.proLink === "" ? (
        null 
      ) : (
        <a href={props.proLink} target="_blank">
          <img src={externalLink} alt="external link" className={classes.proLink} />
        </a>
      )}
      <a href={props.proGit} target="_blank">
        <img src={githubLogo} alt="github logo" className={classes.proGit} />
      </a>
    </div>
  );
};

export default ProjectContainer;
