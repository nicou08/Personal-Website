import React from "react";
import classes from "./About.module.css";
import myphoto from "../../assets/self_image_2.jpg";

const About = () => {
  return (
    <div className={classes.container}>
      <span className={classes.arrow}></span>
      <h1 className={classes.h1}>About Me</h1>
      <img src={myphoto} alt="myphoto" className={classes.myphoto} />

      <p className={classes.p1}>
        Hi! My name is Nicolas and I recently graduated from the University of
        Calgary with a degree in Computer Science. <br></br> <br></br>In my
        university years, I learned many fields in computer science and worked
        on many projects. I gained interest in the topics of networks,
        databases, human-computer interactions, and software engineering.{" "}
        <br></br> <br></br>I am fascinated by the challenges of designing and
        implementing efficient and user-friendly systems, and I believe these
        areas offer exciting opportunities for innovation and impact.
      </p>
      <p className={classes.p2}>
        I'm currently working on a skill posting full stack website with Next.js
        and MongoDB. Below are some of the technologies I've been recently
        working with:
      </p>
      <div className={classes.containter2}>
        <ul>
          <li>Python</li>
          <li>Next.js</li>
        </ul>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
        </ul>
        <ul>
          <li>MongoDB</li>
          <li>Auth.js</li>
        </ul>
        <ul>
          <li>React.js</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
