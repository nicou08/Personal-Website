import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.pgOptions}>
        <button className={classes.pageOption}>Home</button>
        <button className={classes.pageOption} onClick="scroll(0, 100);">
          About
        </button>
        <button className={classes.pageOption}>Projects</button>
        <button className={classes.pageOption}>Contact</button>
        <button className={classes.resumeButton}>RESUME</button>
      </div>
    </div>
  );
};

export default Header;
