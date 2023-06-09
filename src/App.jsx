import React, { useState, useEffect, useRef } from "react";
import Socials from "./components/layout/Socials";
import Header from "./components/layout/Header";
import AvailablePages from "./components/Pages/AvailablePages";
import classes from "./App.module.css";

function App() {
  // This is to show the header after 1 second
  const [showFragment, setShowFragment] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFragment(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // This is to handle the header buttons
  const [activePage, setActivePage] = useState(1);
  const pagesRef = useRef(null);

  const handleButtonClick = (index) => {
    console.log("Heer is index");
    console.log(index);
    console.log(pagesRef.current.offsetHeight);
    setActivePage(index);
    pagesRef.current.scrollTo({
      top: pagesRef.current.offsetHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showFragment && (
        <React.Fragment>
          <Header pagereff={pagesRef} onHandleButton={handleButtonClick} />
          <div className={classes.verticalLine}></div>
          <div className={classes.verticalLine2}></div>
          <div className={classes.horLine}></div>
          <div className={classes.horLine2}></div>
          <AvailablePages pagerefff={pagesRef} />
          <Socials />
        </React.Fragment>
      )}
    </>
  );
}

export default App;
