import React from "react";
import classes from "./Socials.module.css";
import githubLogo from "../../assets/github-mark-white.png";
import linkedinLogo from "../../assets/LinW.png";

const Socials = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <a href="https://www.github.com">
          <img src={githubLogo} alt="github logo" />
        </a>
      </nav>
      <nav>
        <a href="https://www.youtube.com">
          <img src={linkedinLogo} alt="linkedIn logo" />
        </a>
      </nav>
    </footer>
  );
};

export default Socials;
