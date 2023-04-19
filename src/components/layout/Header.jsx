import React from "react";
import classes from "./Header.module.css";
import resume from "../../assets/resume.pdf";

const Header = (props) => {
  const openResume = (event) => {
    event.preventDefault();
    console.log("Resume button clicked");
    window.open(resume);
  };

  return (
    <div className={classes.header}>
      <div className={classes.pgOptions}>
        <button
          className={classes.pageOption}
          key={1}
          onClick={() => props.onHandleButton(0)}
        >
          Home
        </button>
        <button
          className={classes.pageOption}
          key={2}
          onClick={() => props.onHandleButton(1)}
        >
          About
        </button>
        <button
          className={classes.pageOption}
          key={3}
          onClick={() => props.onHandleButton(2)}
        >
          Projects
        </button>
        <button
          className={classes.pageOption}
          key={4}
          onClick={() => props.onHandleButton(3)}
        >
          Contact
        </button>
        <button key={5} className={classes.resumeButton} onClick={openResume}>
          RESUME
        </button>
      </div>
    </div>
  );
};

export default Header;
