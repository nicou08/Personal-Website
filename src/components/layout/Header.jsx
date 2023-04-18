import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
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
        <button className={classes.resumeButton}>RESUME</button>
      </div>
    </div>
  );
};

export default Header;
