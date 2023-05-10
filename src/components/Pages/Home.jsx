import React from "react";
import classes from "./Home.module.css";
import myphoto from "../../assets/greg.jpg";

const Home = () => {
  return (
    <div className={classes.content}>
      <p className={classes.par}>Hello! My name is</p>
      <p className={classes.h1Name}>Nicolas Urrego Guasca</p>
      <p className={classes.par2}>
        I'm a computer science graduate from the University of Calgary
      </p>
    </div>
  );
};

export default Home;
