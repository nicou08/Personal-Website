import React from "react";
import classes from "./AvailablePages.module.css";
import Page from "./Page";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const AvailablePages = () => {
  return (
    <div className={classes.pageList}>
      <Page>
        <Home />
      </Page>
      <Page>
        <About />
      </Page>
      <Page>
        <Projects />
      </Page>
      <Page>
        <Contact />
      </Page>
    </div>
  );
};

export default AvailablePages;
