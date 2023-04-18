import React from "react";
import classes from "./AvailablePages.module.css";
import Page from "./Page";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const AvailablePages = (props) => {
  return (
    <div className={classes.pageList} ref={props.pagerefff}>
      <Page pageKey={0}>
        <Home />
      </Page>
      <Page pageKey={1}>
        <About />
      </Page>
      <Page pageKey={2}>
        <Projects />
      </Page>
      <Page pageKey={3}>
        <Contact />
      </Page>
    </div>
  );
};

export default AvailablePages;
