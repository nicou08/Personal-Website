import React from "react";
import classes from "./Socials.module.css";
import githubLogo from "../../assets/github-mark-white.png";
import linkedinLogo from "../../assets/LinW.png";

const Socials = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <a href="https://github.com/nicou08" target="_blank">
          <img src={githubLogo} alt="github logo" className={classes.footImg} />
        </a>
      </nav>
      <nav>
        <a
          href="https://www.linkedin.com/in/nicolas-urrego-guasca-52685a158/"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            alt="linkedIn logo"
            className={classes.footImg}
          />
        </a>
      </nav>
      <div className={classes.footLine}></div>
    </footer>
  );
};

export default Socials;
