import React, { useEffect, useRef } from "react";
import classes from "./Page.module.css";

const Page = (props) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(pageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("A");
        // console.log(entry.target);
        // console.log("B");
        // console.log(entry);
        // console.log("Elemetn is visible");
        entry.target.classList.add(classes.show);
      } else {
        entry.target.classList.remove(classes.show);
      }
    });
  };

  return (
    <section className={classes.hidden} ref={pageRef} key={props.pageKey}>
      {props.children}
    </section>
  );
};

export default Page;
